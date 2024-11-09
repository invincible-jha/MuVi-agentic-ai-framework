const TaskScheduler = require('./taskScheduler');
const ResourceAllocator = require('./resourceAllocator');
const AgentCommunicator = require('./agentCommunicator');
const ErrorHandler = require('./errorHandler');
const SecurityManager = require('./securityManager');
const PerformanceMonitor = require('./performanceMonitor');
const HealthcareAI = require('./domainSpecific/healthcare');
const FinanceAI = require('./domainSpecific/finance');
const EducationAI = require('./domainSpecific/education');
const SimulationEnvironment = require('./simulationEnvironment');

// Initialize key components
const taskScheduler = new TaskScheduler();
const resourceAllocator = new ResourceAllocator();
const agentCommunicator = new AgentCommunicator();
const errorHandler = new ErrorHandler();
const securityManager = new SecurityManager();
const performanceMonitor = new PerformanceMonitor();
const healthcareAI = new HealthcareAI();
const financeAI = new FinanceAI();
const educationAI = new EducationAI();
const simulationEnvironment = new SimulationEnvironment();

// Configure the framework
taskScheduler.initialize();
resourceAllocator.initialize();
agentCommunicator.initialize();
errorHandler.initialize();
securityManager.initialize();
performanceMonitor.initialize();
healthcareAI.initialize();
financeAI.initialize();
educationAI.initialize();
simulationEnvironment.initialize();

console.log('Agentic AI Framework initialized successfully.');
