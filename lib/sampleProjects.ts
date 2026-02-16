import { Project } from '@/types';

export const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'MoodMate AI',
    description: 'iOS app using SwiftUI and CoreML for mood detection with AI-powered activity suggestions',
    technologies: ['Swift', 'SwiftUI', 'CoreML', 'Gemini API'],
    language: 'swift',
    codeSnippet: `import SwiftUI
import CoreML

struct MoodDetectionView: View {
    @StateObject private var moodAnalyzer = MoodAnalyzer()
    @State private var detectedMood: Mood?
    
    var body: some View {
        VStack(spacing: 24) {
            // Mood Detection Interface
            MoodCameraView(onMoodDetected: { mood in
                detectedMood = mood
                Task {
                    await fetchAISuggestions(for: mood)
                }
            })
            
            if let mood = detectedMood {
                MoodResultCard(mood: mood)
                    .transition(.scale.combined(with: .opacity))
            }
        }
        .padding()
        .background(GlassBackground())
    }
    
    func fetchAISuggestions(for mood: Mood) async {
        let suggestions = await moodAnalyzer.getActivities(mood)
        // Display personalized activities
    }
}`,
    githubUrl: 'https://github.com/yourusername/moodmate',
    color: '#00d9ff',
    position: [0, 0, 0]
  },
  {
    id: '2',
    title: 'CollabBoard',
    description: 'Real-time collaborative task management with AI integration and WebSocket sync',
    technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
    language: 'typescript',
    codeSnippet: `import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface Task {
  id: string;
  title: string;
  assignee: string;
  status: 'todo' | 'in-progress' | 'done';
}

export function useCollaboration(boardId: string) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_WS_URL!);
    
    newSocket.emit('join-board', boardId);
    
    newSocket.on('task-updated', (task: Task) => {
      setTasks(prev => 
        prev.map(t => t.id === task.id ? task : t)
      );
    });

    newSocket.on('task-created', (task: Task) => {
      setTasks(prev => [...prev, task]);
    });

    setSocket(newSocket);
    
    return () => {
      newSocket.disconnect();
    };
  }, [boardId]);

  const updateTask = (taskId: string, updates: Partial<Task>) => {
    socket?.emit('update-task', { taskId, updates });
  };

  return { tasks, updateTask };
}`,
    githubUrl: 'https://github.com/yourusername/collabboard',
    liveUrl: 'https://collabboard-demo.vercel.app',
    color: '#bd00ff',
    position: [3, 1, -2]
  },
  {
    id: '3',
    title: 'NEXUS Command Center',
    description: 'Cyberpunk-themed kanban board with stunning animations and task management',
    technologies: ['Next.js', 'Framer Motion', 'TailwindCSS', 'Zustand'],
    language: 'typescript',
    codeSnippet: `import { motion } from 'framer-motion';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    
    if (!destination) return;
    
    // Reorder logic with smooth animations
    const newColumns = reorderColumns(
      columns, 
      source, 
      destination
    );
    
    setColumns(newColumns);
  };

  return (
    <div className="grid-bg min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-6"
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex gap-6">
            {Object.entries(columns).map(([id, column]) => (
              <Column 
                key={id} 
                column={column}
                className="neon-border"
              />
            ))}
          </div>
        </DragDropContext>
      </motion.div>
    </div>
  );
}`,
    githubUrl: 'https://github.com/yourusername/nexus-kanban',
    liveUrl: 'https://nexus-command.vercel.app',
    color: '#ff006e',
    position: [-3, -1, -1]
  },
  {
    id: '4',
    title: 'Typography Quest',
    description: 'Educational game teaching typography principles through interactive challenges',
    technologies: ['React', 'Canvas API', 'Game Logic', 'CSS Animations'],
    language: 'javascript',
    codeSnippet: `class TypographyGame {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.score = 0;
    this.level = 1;
  }

  generateChallenge() {
    const fonts = ['Helvetica', 'Garamond', 'Futura', 'Baskerville'];
    const weights = [300, 400, 600, 700];

    return {
      targetFont: fonts[Math.floor(Math.random() * fonts.length)],
      targetWeight: weights[Math.floor(Math.random() * weights.length)],
      options: this.generateOptions(fonts, weights)
    };
  }

  checkAnswer(userSelection, challenge) {
    const correct =
      userSelection.font === challenge.targetFont &&
      userSelection.weight === challenge.targetWeight;

    if (correct) {
      this.score += 100 * this.level;
      this.playSuccessAnimation();
    }

    return correct;
  }

  playSuccessAnimation() {
    // Particle explosion animation
    const particles = Array.from({ length: 50 }, () =>
      new Particle(this.canvas.width / 2, this.canvas.height / 2)
    );

    this.animateParticles(particles);
  }
}`,
    githubUrl: 'https://github.com/yourusername/typography-quest',
    liveUrl: 'https://typography-quest.vercel.app',
    color: '#00ff87',
    position: [2, -2, 1]
  },
  {
    id: '5',
    title: 'AI Chat Companion',
    description: 'Intelligent chatbot with natural language processing and context awareness',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'Redis'],
    language: 'python',
    codeSnippet: `from fastapi import FastAPI, WebSocket
from langchain.chat_models import ChatOpenAI
from langchain.memory import ConversationBufferMemory

app = FastAPI()

class ChatBot:
    def __init__(self):
        self.llm = ChatOpenAI(temperature=0.7)
        self.memory = ConversationBufferMemory()

    async def process_message(self, message: str) -> str:
        # Add context from memory
        context = self.memory.load_memory_variables({})

        # Generate response with context awareness
        response = await self.llm.apredict(
            message,
            chat_history=context.get('history', [])
        )

        # Update memory
        self.memory.save_context(
            {"input": message},
            {"output": response}
        )

        return response

@app.websocket("/chat")
async def chat_endpoint(websocket: WebSocket):
    await websocket.accept()
    bot = ChatBot()

    while True:
        message = await websocket.receive_text()
        response = await bot.process_message(message)
        await websocket.send_text(response)`,
    githubUrl: 'https://github.com/yourusername/ai-chat-companion',
    color: '#9d4edd',
    position: [-2, 1, 2]
  },
  {
    id: '6',
    title: 'E-Commerce Dashboard',
    description: 'Real-time analytics dashboard with interactive charts and sales metrics',
    technologies: ['Vue.js', 'Chart.js', 'Node.js', 'MongoDB'],
    language: 'javascript',
    codeSnippet: `<template>
  <div class="dashboard">
    <MetricsGrid :metrics="realTimeMetrics" />

    <div class="charts-container">
      <SalesChart
        :data="salesData"
        :period="selectedPeriod"
        @period-change="updatePeriod"
      />

      <RevenueChart
        :data="revenueData"
        :loading="isLoading"
      />
    </div>

    <OrdersTable
      :orders="recentOrders"
      @refresh="fetchOrders"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useWebSocket } from '@/composables/useWebSocket';

const { data, connect, disconnect } = useWebSocket('ws://api/analytics');
const realTimeMetrics = ref({});
const salesData = ref([]);

onMounted(() => {
  connect();
  fetchInitialData();
});

const fetchInitialData = async () => {
  const response = await fetch('/api/dashboard');
  const data = await response.json();
  salesData.value = data.sales;
};
</script>`,
    githubUrl: 'https://github.com/yourusername/ecommerce-dashboard',
    liveUrl: 'https://dashboard-demo.vercel.app',
    color: '#f72585',
    position: [0, -1, -3]
  },
  {
    id: '7',
    title: 'Blockchain Wallet',
    description: 'Secure cryptocurrency wallet with multi-chain support and transaction tracking',
    technologies: ['Rust', 'Web3', 'React Native', 'SQLite'],
    language: 'rust',
    codeSnippet: `use web3::types::{Address, U256};
use tokio::sync::Mutex;
use std::sync::Arc;

pub struct Wallet {
    address: Address,
    balance: Arc<Mutex<U256>>,
    transactions: Vec<Transaction>,
}

impl Wallet {
    pub fn new(private_key: &str) -> Result<Self, WalletError> {
        let address = derive_address(private_key)?;

        Ok(Wallet {
            address,
            balance: Arc::new(Mutex::new(U256::zero())),
            transactions: Vec::new(),
        })
    }

    pub async fn send_transaction(
        &mut self,
        to: Address,
        amount: U256,
    ) -> Result<String, WalletError> {
        // Validate balance
        let balance = self.balance.lock().await;
        if *balance < amount {
            return Err(WalletError::InsufficientFunds);
        }

        // Create and sign transaction
        let tx = Transaction::new(self.address, to, amount);
        let signed = self.sign_transaction(tx)?;

        // Broadcast to network
        let tx_hash = broadcast(signed).await?;

        Ok(tx_hash)
    }
}`,
    githubUrl: 'https://github.com/yourusername/blockchain-wallet',
    color: '#4cc9f0',
    position: [3, 0, 1]
  },
  {
    id: '8',
    title: 'ML Image Classifier',
    description: 'Deep learning model for image classification with real-time inference',
    technologies: ['TensorFlow', 'Python', 'Flask', 'Docker'],
    language: 'python',
    codeSnippet: `import tensorflow as tf
from tensorflow.keras import layers, models
import numpy as np

class ImageClassifier:
    def __init__(self, model_path=None):
        if model_path:
            self.model = tf.keras.models.load_model(model_path)
        else:
            self.model = self.build_model()

    def build_model(self):
        model = models.Sequential([
            layers.Conv2D(32, (3, 3), activation='relu',
                         input_shape=(224, 224, 3)),
            layers.MaxPooling2D((2, 2)),
            layers.Conv2D(64, (3, 3), activation='relu'),
            layers.MaxPooling2D((2, 2)),
            layers.Conv2D(128, (3, 3), activation='relu'),
            layers.Flatten(),
            layers.Dense(128, activation='relu'),
            layers.Dropout(0.5),
            layers.Dense(10, activation='softmax')
        ])

        model.compile(
            optimizer='adam',
            loss='categorical_crossentropy',
            metrics=['accuracy']
        )

        return model

    def predict(self, image):
        processed = self.preprocess(image)
        predictions = self.model.predict(processed)
        return self.decode_predictions(predictions)`,
    githubUrl: 'https://github.com/yourusername/ml-classifier',
    color: '#7209b7',
    position: [-3, -2, 0]
  }
];
