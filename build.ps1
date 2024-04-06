param (
    [string] $version
)

$startingLocation = Get-Location
Set-Location $PSScriptRoot
try {
    Write-Host ===========================================================================
    Write-Host =                   Running Frontend build script                         =
    Write-Host ===========================================================================
    
    Write-Host ------ installing dependencies ------
    npm install --force
    if(-not $?) { throw "Action failed. Check the logs." }
    Write-Host ------ dependencies installed ------
    
    Write-Host ------ starting generation of default translation files ------
    npm run ci-i18n:extract-poc
    if(-not $?) { throw "Action failed. Check the logs." }
    Write-Host ------ default translation files generated ------
    
    Write-Host ------ starting linter ------
    npm run ci-lint
    if(-not $?) { throw "Action failed. Check the logs." }
    Write-Host ------ linting finished ------
    
    #Write-Host ------ starting unit tests ------
    #npm run ci-test
    #if(-not $?) { throw "Action failed. Check the logs." }
    #Write-Host ------ unit tests finished ------

    Write-Host ------ starting Angular build ------
    npm run ci-build
    if(-not $?) { throw "Action failed. Check the logs." }
    Write-Host ------ Angular build finished ------
    
#    Write-Host ------ add server config into apps artifact ------
#    npm run ci-add-server-config
#    if(-not $?) { throw "Action failed. Check the logs." }
#    Write-Host ------ server config added ------
    
#    Write-Host ------ generate api configuration to dist ------
#    npm run ci-api-configuration
#    if(-not $?) { throw "Action failed. Check the logs." }
#    Write-Host ------ api configuration is generated ------

    Write-Host ------ copying configuration files to dist ------
    Copy-Item -Path "./deployment/azure-static-website/standard/index.html" -Destination "./dist/apps/app"
    Copy-Item -Path "./deployment/azure-static-website/standard/staticwebapp.config.json" -Destination "./dist/apps/app"
    Write-Host ------ configuration files copied ------
    
    Write-Host ===========================================================================
    Write-Host =                   Frontend build done                                   =
    Write-Host ===========================================================================
    
} finally {
    Set-Location $startingLocation
}
