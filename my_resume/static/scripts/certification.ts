class CertificationPage {
    static certifications: Promise<any> | null = null;
    
    static async initializePage(): Promise<void> {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/certification/');
            
            if (!response.ok) {
                throw new Error(`Error retrieving certifications: ${response.status} ${response.statusText}`);
            }
            
            this.certifications = await response.json();
        } catch (error) {
            console.error(error);
        }
    }
}

CertificationPage.initializePage().then(() => {
    console.log(CertificationPage.certifications);
});
