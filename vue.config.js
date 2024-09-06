module.exports = {

    publicPath: process.env.NODE_ENV === 'production'
        ? '/srikartalluri/' // Replace <REPO_NAME> with your GitHub repository name
        : '/',

    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}