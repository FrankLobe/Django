class EducationPage {
    static educations: Promise<any> | null = null;
    
    static async initializePage(): Promise<void> {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/education/');
            
            if (!response.ok) {
                throw new Error(`Error retrieving educations: ${response.status} ${response.statusText}`);
            }
            
            this.educations = await response.json();
        } catch (error) {
            console.error(error);
        }
    }
}

EducationPage.initializePage().then(() => {
    console.log(EducationPage.educations);
});
