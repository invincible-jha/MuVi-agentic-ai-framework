class SimulationEnvironment {
  constructor() {
    this.agents = [];
    this.scenarios = [];
    this.visualizationTools = [];
  }

  addAgent(agent) {
    this.agents.push(agent);
  }

  addScenario(scenario) {
    this.scenarios.push(scenario);
  }

  addVisualizationTool(tool) {
    this.visualizationTools.push(tool);
  }

  runSimulation() {
    for (const scenario of this.scenarios) {
      console.log(`Running scenario: ${scenario.name}`);
      scenario.execute(this.agents);
    }
  }

  visualize() {
    for (const tool of this.visualizationTools) {
      tool.visualize(this.agents);
    }
  }
}

module.exports = SimulationEnvironment;
