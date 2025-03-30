import express from "express";
import axios from "axios";
import { JSDOM } from "jsdom";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/scrape", async (req, res) => {
    const keyword = req.query.keyword;
    
    if (!keyword) {
        return res.status(400).json({ error: "Keyword is required" });
    }

    console.log("Buscando produto para:", keyword);

    try {
        const amazonURL = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
        const response = await axios.get(amazonURL, {
            headers: { "User-Agent": "Mozilla/5.0" }
        });

        const dom = new JSDOM(response.data);
        const document = dom.window.document;
        const products = [];


        document.querySelectorAll(".s-main-slot .s-result-item").forEach((item) => {
            const titleElement = item.querySelector("h2 a span");
            const ratingElement = item.querySelector(".a-icon-alt");
            const reviewsElement = item.querySelector(".s-link-style");
            const imageElement = item.querySelector("img.s-image");

            const title = titleElement ? titleElement.textContent : "No title";
            const rating = ratingElement ? ratingElement.textContent : "No rating";
            const reviews = reviewsElement ? reviewsElement.textContent : "No reviews";
            const image = imageElement ? imageElement.src : "";

            if (title && image) {
                products.push({
                    title,
                    rating,
                    reviews,
                    image,
                });
            }
        });
        
        res.json({ products });
    } catch (error) {
        console.error("Erro ao buscar os produtos:", error.message || error);
        res.status(500).json({ error: "Failed to scrape Amazon" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na URL http://localhost:${PORT}`);
});
