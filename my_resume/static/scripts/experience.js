"use strict";
class ExperiencePage {
    static experiences = null;
    static async initializePage() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/experience/');
            if (!response.ok) {
                throw new Error(`Error retrieving experiences: ${response.status} ${response.statusText}`);
            }
            this.experiences = await response.json();
        }
        catch (error) {
            console.error(error);
        }
    }
}
ExperiencePage.initializePage().then(() => {
    console.log(ExperiencePage.experiences);
});
