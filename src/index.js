const TaskScheduler = require('./taskScheduler');
const ResourceAllocator = require('./resourceAllocator');
const AgentCommunicator = require('./agentCommunicator');
const ErrorHandler = require('./errorHandler');
const SecurityManager = require('./securityManager');
const PerformanceMonitor = require('./performanceMonitor');

// Initialize key components
const taskScheduler = new TaskScheduler();
const resourceAllocator = new ResourceAllocator();
const agentCommunicator = new AgentCommunicator();
const errorHandler = new ErrorHandler();
const securityManager = new SecurityManager();
const performanceMonitor = new PerformanceMonitor();

// Configure the framework
taskScheduler.initialize();
resourceAllocator.initialize();
agentCommunicator.initialize();
errorHandler.initialize();
securityManager.initialize();
performanceMonitor.initialize();

console.log('Agentic AI Framework initialized successfully.');
