const fs = require("fs").promises;
const path = require("path");

const linksDevFilePath = path.resolve(__dirname, "./links.dev.txt");
const linksProdFilePath = path.resolve(__dirname, "./links.prod.txt");
const linksFilePath = process.env.LINKS_TYPE === "prod" ? linksProdFilePath : linksDevFilePath;

async function printLinkByAlias(alias) {
    const linksFileContent = await fs.readFile(linksFilePath, "utf-8");
    const links = linksFileContent
        .split("\n")
        .filter((str) => !!str)
        .map((row) => row.split(" "))
        .reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), {});

    console.log(links[alias]);
}

const alias = process.argv[2];
printLinkByAlias(alias);
