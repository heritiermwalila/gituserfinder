class GitHub{
    constructor(){
        this.client_id = '8ec39f702c12d54585c1';
        this.client_secret = 'c30d81c96c705fb37c60620c11eb84a993c1a7ee';
        this.repo_count = 5;
        this.sort_repos = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.sort_repos}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }

    }
}