export const quizData = {
    courses: [
        {
            id: "biology",
            title: "Biology",
            icon: "Microscope",
            description: "Explore the science of life and living organisms.",
            color: "bg-emerald-100 text-emerald-700",
            chapters: [
                {
                    id: "cell-structure",
                    title: "Cell Structure",
                    description: "Understand the fundamental unit of life.",
                    questions: [
                        {
                            id: "bio-1-1",
                            questionText: "Which organelle is known as the powerhouse of the cell?",
                            options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
                            correctAnswerIndex: 1,
                            explanation: "Mitochondria generate most of the chemical energy needed to power the cell's biochemical reactions."
                        },
                        {
                            id: "bio-1-2",
                            questionText: "What is the main function of the cell membrane?",
                            options: ["Support and protection", "Energy production", "Protein synthesis", "Control what enters and leaves"],
                            correctAnswerIndex: 3,
                            explanation: "The cell membrane controls the movement of substances in and out of cells and organelles."
                        },
                        {
                            id: "bio-1-3",
                            questionText: "Which structure is found in plant cells but not in animal cells?",
                            options: ["Cell Wall", "Nucleus", "Mitochondria", "Ribosome"],
                            correctAnswerIndex: 0,
                            explanation: "The cell wall is a rigid layer lying outside the plasma membrane of the cells of plants, fungi, and bacteria."
                        }
                    ]
                },
                {
                    id: "genetics",
                    title: "Genetics",
                    description: "Study of genes, genetic variation, and heredity.",
                    questions: [
                        {
                            id: "bio-2-1",
                            questionText: "What is the basic unit of heredity?",
                            options: ["Gene", "Chromosome", "DNA", "RNA"],
                            correctAnswerIndex: 0,
                            explanation: "A gene is the basic physical and functional unit of heredity."
                        }
                    ]
                }
            ]
        },
        {
            id: "cs",
            title: "Computer Science",
            icon: "Cpu",
            description: "Dive into algorithms, data structures, and coding.",
            color: "bg-blue-100 text-blue-700",
            chapters: [
                {
                    id: "algorithms",
                    title: "Algorithms",
                    description: "Step-by-step procedures for calculations.",
                    questions: [
                        {
                            id: "cs-1-1",
                            questionText: "What is the time complexity of binary search?",
                            options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
                            correctAnswerIndex: 1,
                            explanation: "Binary search halves the search space at each step, resulting in logarithmic time complexity."
                        },
                        {
                            id: "cs-1-2",
                            questionText: "Which sorting algorithm is generally considered the fastest on average?",
                            options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
                            correctAnswerIndex: 2,
                            explanation: "Quick Sort has an average time complexity of O(n log n) and is often faster in practice than other O(n log n) algorithms."
                        }
                    ]
                },
                {
                    id: "data-structures",
                    title: "Data Structures",
                    description: "Ways to organize and store data.",
                    questions: [
                        {
                            id: "cs-2-1",
                            questionText: "Which data structure uses LIFO (Last In, First Out)?",
                            options: ["Queue", "Stack", "Array", "Linked List"],
                            correctAnswerIndex: 1,
                            explanation: "A stack follows the LIFO principle, where the last element added is the first one removed."
                        }
                    ]
                }
            ]
        },
        {
            id: "history",
            title: "World History",
            icon: "Globe",
            description: "Journey through the ages of human civilization.",
            color: "bg-amber-100 text-amber-700",
            chapters: [
                {
                    id: "ancient-civilizations",
                    title: "Ancient Civilizations",
                    description: "Egypt, Mesopotamia, and the Indus Valley.",
                    questions: [
                        {
                            id: "hist-1-1",
                            questionText: "Which civilization built the Pyramids of Giza?",
                            options: ["Romans", "Greeks", "Egyptians", "Mayans"],
                            correctAnswerIndex: 2,
                            explanation: "The Pyramids of Giza were built by the ancient Egyptians as tombs for their pharaohs."
                        }
                    ]
                }
            ]
        }
    ]
};
