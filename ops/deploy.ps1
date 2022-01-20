New-AzResourceGroup -Name 'rg_thed24_portfolio' -Location "australia east"

New-AzResourceGroupDeployment -ResourceGroupName 'rg_thed24_portfolio' -TemplateFile "./azuredeploy.json" -TemplateParameterFile "./azuredeploy.parameters.json"
