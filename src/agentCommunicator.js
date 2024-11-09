class AgentCommunicator {
  constructor() {
    this.agents = {};
  }

  registerAgent(agentId, agent) {
    this.agents[agentId] = agent;
  }

  sendMessage(senderId, receiverId, message) {
    if (this.agents[receiverId]) {
      this.agents[receiverId].receiveMessage(senderId, message);
    } else {
      throw new Error(`Agent with ID ${receiverId} not found`);
    }
  }

  broadcastMessage(senderId, message) {
    for (const [agentId, agent] of Object.entries(this.agents)) {
      if (agentId !== senderId) {
        agent.receiveMessage(senderId, message);
      }
    }
  }

  synchronizeData(agentId, data) {
    if (this.agents[agentId]) {
      this.agents[agentId].synchronizeData(data);
    } else {
      throw new Error(`Agent with ID ${agentId} not found`);
    }
  }
}

module.exports = AgentCommunicator;
