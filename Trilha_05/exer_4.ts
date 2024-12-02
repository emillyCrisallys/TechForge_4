abstract class VoteSystem {
    
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate]++; 
        } else {
            this.votes[candidate] = 1; 
        }
    }

    getResults(): object {
        return this.votes; 
    }
}

class Poll extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate]++; 
        } else {
            this.votes[candidate] = 1; 
        }
    }

    getResults(): object {
        
        const sortedCandidates = Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1]); 

        return Object.fromEntries(sortedCandidates);
    }
}


const election = new Election();
election.voteFor("Candidato A");
election.voteFor("Candidato B");
election.voteFor("Candidato A");

console.log("Resultados da Eleição:");
console.log(election.getResults()); 


const poll = new Poll();
poll.voteFor("Candidato X");
poll.voteFor("Candidato Y");
poll.voteFor("Candidato X");
poll.voteFor("Candidato Z");
poll.voteFor("Candidato Y");

console.log("Resultados da Enquete:");
console.log(poll.getResults()); 
