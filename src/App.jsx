import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import CourseList from './components/CourseList';
import ChapterList from './components/ChapterList';
import QuizView from './components/QuizView';
import ScoreSummary from './components/ScoreSummary';
import { quizData } from './data/quizData';

const CourseListWrapper = () => {
  const navigate = useNavigate();
  return (
    <CourseList
      courses={quizData.courses}
      onSelectCourse={(course) => navigate(`/course/${course.id}`)}
    />
  );
};

const ChapterListWrapper = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = quizData.courses.find(c => c.id === courseId);

  if (!course) return <div className="p-8 text-center">Course not found</div>;

  return (
    <ChapterList
      course={course}
      onBack={() => navigate('/')}
      onSelectChapter={(chapter) => navigate(`/quiz/${courseId}/${chapter.id}`)}
    />
  );
};

const QuizWrapper = () => {
  const { courseId, chapterId } = useParams();
  const navigate = useNavigate();
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  // Reset state when chapterId changes (though usually component remounts)
  // We can use a key on the route to force remount if needed, but usually fine.

  const course = quizData.courses.find(c => c.id === courseId);
  const chapter = course?.chapters.find(ch => ch.id === chapterId);

  if (!course || !chapter) return <div className="p-8 text-center">Chapter not found</div>;

  if (isFinished) {
    return (
      <ScoreSummary
        score={score}
        total={chapter.questions.length}
        onRestart={() => {
          setIsFinished(false);
          setScore(0);
        }}
        onHome={() => navigate('/')}
      />
    );
  }

  return (
    <QuizView
      chapter={chapter}
      onBack={() => navigate(`/course/${courseId}`)}
      onFinish={(finalScore) => {
        setScore(finalScore);
        setIsFinished(true);
      }}
    />
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-700">
        <Routes>
          <Route path="/" element={<CourseListWrapper />} />
          <Route path="/course/:courseId" element={<ChapterListWrapper />} />
          <Route path="/quiz/:courseId/:chapterId" element={<QuizWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
