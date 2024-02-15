class IndexPage {
    static pageParagraphs: Promise<any> | null = null;
    
    static async initializePage(): Promise<void> {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/pageparagraph/');
            
            if (!response.ok) {
                throw new Error(`Error retrieving page paragraphs: ${response.status} ${response.statusText}`);
            }
            
            this.pageParagraphs = await response.json();
        } catch (error) {
            console.error(error);
        }
    }
}

IndexPage.initializePage().then(() => {
    console.log(IndexPage.pageParagraphs);
});
