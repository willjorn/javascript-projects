class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    
    addScore(newScore) {
        this.scores.push(newScore);
    }
    
    average() {
        let sum = this.scores.reduce((acc, score) => acc + score, 0);
        return Math.round((sum / this.scores.length) * 10) / 10;
    }
    
    status() {
        const avgScore = this.average();
        if (avgScore >= 90) {
            return "Accepted";
        } else if (avgScore >= 80) {
            return "Reserve";
        } else if (avgScore >= 70) {
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
    
    boostStatus(targetStatus) {
        let currentStatus = this.status();
        while (currentStatus !== targetStatus && currentStatus !== "Accepted" && this.scores.length < 10) {
            this.addScore(100);
            currentStatus = this.status();
        }
        return currentStatus;
    }
}

// Create objects for the candidates
const bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
const merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
const gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

// Test addScore method
bubbaBear.addScore(83);
console.log("Bubba Bear's scores after adding 83:", bubbaBear.scores);

// Test average method
console.log("Merry Maltese's average test score:", merryMaltese.average());

// Test status method
console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`);
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);

// Test boostStatus method
console.log(`Glad Gator's status after boosting: ${gladGator.boostStatus("Reserve")}`);
console.log(`Glad Gator's status after boosting further: ${gladGator.boostStatus("Accepted")}`);
