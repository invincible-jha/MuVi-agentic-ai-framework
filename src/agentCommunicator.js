const crypto = require('crypto');

class AgentCommunicator {
  constructor() {
    this.agents = {};
    this.encryptionKey = 'default_key';
  }

  registerAgent(agentId, agent) {
    this.agents[agentId] = agent;
  }

  sendMessage(senderId, receiverId, message) {
    if (this.agents[receiverId]) {
      const encryptedMessage = this.encryptMessage(message);
      this.agents[receiverId].receiveMessage(senderId, encryptedMessage);
    } else {
      throw new Error(`Agent with ID ${receiverId} not found`);
    }
  }

  broadcastMessage(senderId, message) {
    const encryptedMessage = this.encryptMessage(message);
    for (const [agentId, agent] of Object.entries(this.agents)) {
      if (agentId !== senderId) {
        agent.receiveMessage(senderId, encryptedMessage);
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

  encryptMessage(message) {
    const cipher = crypto.createCipher('aes-256-cbc', this.encryptionKey);
    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  decryptMessage(encryptedMessage) {
    const decipher = crypto.createDecipher('aes-256-cbc', this.encryptionKey);
    let decrypted = decipher.update(encryptedMessage, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}

module.exports = AgentCommunicator;
