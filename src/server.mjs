import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/proxy', async (req, res) => {
    const url = req.query.url;
    if (!url) {
        console.error('No URL provided');
        return res.status(400).send('No URL provided');
    }
    try {
        console.log(`Fetching data from URL: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from URL: ${response.statusText}`);
        }
        const data = await response.text();
        console.log('Data fetched successfully');
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send(`Error fetching data: ${error.message}`);
    }
});

app.get('/css-proxy', async (req, res) => {
    const cssUrl = req.query.url;
    if (!cssUrl) {
        console.error('No CSS URL provided');
        return res.status(400).send('No CSS URL provided');
    }
    try {
        const response = await fetch(cssUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch CSS: ${response.statusText}`);
        }
        const contentType = response.headers.get('content-type');
        res.setHeader('Content-Type', contentType);
        const text = await response.text();
        res.send(text);
    } catch (error) {
        console.error('Error fetching CSS:', error);
        res.status(500).send(`Error fetching CSS: ${error.message}`);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    
        console.log(`Server running on port ${PORT}`);});