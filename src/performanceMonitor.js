class PerformanceMonitor {
  constructor() {
    this.performanceData = {};
  }

  startMonitoring(agentId) {
    if (!this.performanceData[agentId]) {
      this.performanceData[agentId] = {
        startTime: Date.now(),
        tasksCompleted: 0,
        resourceUsage: [],
      };
    }
  }

  stopMonitoring(agentId) {
    if (this.performanceData[agentId]) {
      this.performanceData[agentId].endTime = Date.now();
    }
  }

  logTaskCompletion(agentId) {
    if (this.performanceData[agentId]) {
      this.performanceData[agentId].tasksCompleted += 1;
    }
  }

  logResourceUsage(agentId, resourceUsage) {
    if (this.performanceData[agentId]) {
      this.performanceData[agentId].resourceUsage.push(resourceUsage);
    }
  }

  getPerformanceData(agentId) {
    return this.performanceData[agentId];
  }

  optimizePerformance() {
    // Implement optimization logic here
    console.log('Optimizing performance...');
  }
}

module.exports = PerformanceMonitor;
