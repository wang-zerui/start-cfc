async function preInit(inputObj) {

}

async function postInit(inputObj) {
   console.log(`\n    Welcome to the Baidu CFC start application
    This application requires to open these services: 
       CFC : https://cloud.baidu.com/product/cfc.html
    This application can help you quickly deploy the huaweicloud functionGraph project.
    The application uses FG component：
       * Help Docs  : https://github.com/xinwuyun/cfc
       * Yaml Config: https://github.com/xinwuyun/cfc/blob/main/docs/Others/yaml.md
    The application homepage: https://github.com/xinwuyun/start-cfc\n`)
}

module.exports = {
    postInit,
    preInit
}
postInit()