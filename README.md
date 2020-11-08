# Node Server Sckeleton
## Architecture

This is a mircoservice application system, were we decouple every module in a way that services dont know each other in the core service, but every new service have a connector file that sets the way microservices can interact. 

## Project Structure

* [src](/src)
    * [controller](/src/controller)
    * [helpers](/src/helpers)
    * [models](/src/models)
    * [routes](/src/routes)
    * [services](/src/services)
    * [tests](/src/test)
    * [utilities](/src/utilities)

## INSTALL

Download the project.
Go to the folder root and create a .env.dev, .env.prod, .env.qa from the .env.sample
Then in the terminal `cd {root-path}` then `npm install` and then `npm start`

## Environment config

This project has three different environments. We have .env for each environment with the right configuration to work with facebook messenger, watson assistant and cloud foundry

 * DEV (This environment is for development purpose, local development) 
 * QA (This environment is for qa purpose, is for qa testers and client to check features and progress of development)
 * PROD (This environment is only for PRODUCTION purpose, it will be connected to the official page and our production server cloud)

### Flavors

Script to run different environment 

 * DEV `npm run dev` 
 * QA `npm run qa`
 * PROD `npm run build`


## Structure of Orchestrator

MCS (Model-Controller-Services) for the api in nodeJS. Each folder has a readme explaining his functionality in the project.
