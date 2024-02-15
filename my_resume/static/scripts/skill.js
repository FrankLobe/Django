"use strict";
class SkillPage {
    static skills = null;
    static async initializePage() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/skill/');
            if (!response.ok) {
                throw new Error(`Error retrieving skills: ${response.status} ${response.statusText}`);
            }
            this.skills = await response.json();
        }
        catch (error) {
            console.error(error);
        }
    }
}
SkillPage.initializePage().then(() => {
    console.log(SkillPage.skills);
});
