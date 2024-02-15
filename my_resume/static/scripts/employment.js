"use strict";
class EmploymentPage {
    static employments = null;
    static async initializePage() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/employment/');
            if (!response.ok) {
                throw new Error(`Error retrieving employments: ${response.status} ${response.statusText}`);
            }
            this.employments = await response.json();
        }
        catch (error) {
            console.error(error);
        }
    }
}
EmploymentPage.initializePage().then(() => {
    console.log(EmploymentPage.employments);
});
