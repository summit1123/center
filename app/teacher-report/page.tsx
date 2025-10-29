"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  BookOpen, 
  User, 
  MessageSquare, 
  Brain, 
  Settings, 
  Users, 
  Activity,
  PenTool,
  Send,
  Clock,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Target,
  FileText,
  Calendar,
  Star,
  TrendingUp,
  ArrowRight,
  Download,
  RefreshCw,
  MessagesSquare
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// 학생 데이터
const studentReports = [
  {
    id: 1,
    name: "김민준",
    grade: "2학년",
    reportDate: "2024-10-28",
    status: "주의 필요",
    priority: "high",
    subjects: {
      korean: { score: 65, trend: "declining", concern: "읽기 이해력 부족" },
      math: { score: 58, trend: "stable", concern: "기초 연산 어려움" },
      social: { score: 72, trend: "improving", concern: "집중력 향상 필요" }
    },
    behavioral: {
      attention: "30분 이상 집중 어려움",
      social: "또래와의 상호작용 소극적",
      emotional: "스트레스 상황에서 위축"
    },
    recommendations: [
      "읽기 능력 향상을 위한 단계별 교재 제공",
      "수학 기초 개념 재학습 프로그램 참여",
      "소집단 활동을 통한 사회성 기술 훈련"
    ],
    parentFeedback: "집에서도 책 읽기 시간을 늘리고 있습니다. 수학은 여전히 어려워해요.",
    lastUpdate: "1시간 전"
  },
  {
    id: 2,
    name: "박서연",
    grade: "2학년", 
    reportDate: "2024-10-28",
    status: "양호",
    priority: "medium",
    subjects: {
      korean: { score: 78, trend: "improving", concern: "쓰기 표현력 향상 중" },
      math: { score: 82, trend: "stable", concern: "문제 해결 과정 설명 부족" },
      social: { score: 85, trend: "improving", concern: "발표력 좋음" }
    },
    behavioral: {
      attention: "50분 집중 가능",
      social: "리더십 성향, 친구들과 원활한 관계",
      emotional: "안정적, 자신감 있음"
    },
    recommendations: [
      "창의적 쓰기 활동 제공",
      "수학 문제 해결 과정 설명하기 연습",
      "리더십 역할 기회 확대"
    ],
    parentFeedback: "최근 집에서도 적극적으로 이야기를 많이 해요. 칭찬해주세요!",
    lastUpdate: "2시간 전"
  }
]

export default function TeacherReportPage() {
  const [selectedStudent, setSelectedStudent] = useState(studentReports[0])
  const [replyText, setReplyText] = useState("")
  const [scenarioInput, setScenarioInput] = useState("")
  const [generatedScenario, setGeneratedScenario] = useState("")

  const generateScenario = () => {
    const scenarios = [
      {
        input: "읽기 어려움",
        output: `📚 **읽기 능력 향상 시나리오**

**상황 설정:** 민준이가 좋아하는 공룡 이야기책을 활용한 읽기 활동

**1단계 (1-2주차):**
- 그림이 많은 공룡 도감으로 시작
- 공룡 이름과 특징을 함께 읽어보기
- 하루 10분, 선생님과 함께 읽기

**2단계 (3-4주차):**
- 간단한 공룡 이야기책 선택
- 문장별로 번갈아 읽기
- 읽은 내용을 그림으로 표현하기

**3단계 (5-6주차):**
- 혼자서 짧은 문단 읽기 도전
- 읽은 후 간단한 질문에 답하기
- 가족에게 읽어주기 숙제

**평가 방법:**
- 주간 읽기 속도 측정
- 이해도 확인 퀴즈
- 학부모 피드백 수집

**기대 효과:** 6주 후 읽기 속도 20% 향상, 이해력 향상`
      },
      {
        input: "수학 기초",
        output: `🔢 **수학 기초 다지기 시나리오**

**상황 설정:** 놀이를 통한 즐거운 수학 학습

**1단계 - 구체물 활용:**
- 블록, 구슬로 수 세기
- 10 이하 덧셈뺄셈 놀이
- 일상 물건으로 수학 개념 익히기

**2단계 - 게임화:**
- 수학 보드게임 활용
- 친구와 함께하는 계산 경쟁
- 디지털 수학 앱 활용

**3단계 - 실생활 적용:**
- 간식 나누어주기
- 시간 읽기 연습
- 용돈 계산하기

**부모님과 함께:**
- 마트에서 물건 개수 세기
- 요리할 때 계량하기
- 시계 보며 시간 알려주기`
      }
    ]

    const matchedScenario = scenarios.find(s => 
      scenarioInput.includes("읽기") || scenarioInput.includes("독서")
    ) || scenarios.find(s => 
      scenarioInput.includes("수학") || scenarioInput.includes("계산")
    ) || scenarios[0]

    setGeneratedScenario(matchedScenario.output)
  }

  return (
    <div className="min-h-screen bg-cream-white">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white shadow-soft">
        <div className="flex h-16 items-center border-b border-warm-gray px-6 bg-gradient-to-r from-sky-blue to-mint-green">
          <BookOpen className="mr-3 h-6 w-6 text-white" />
          <span className="text-lg font-bold text-white">학생 지원 플랫폼</span>
        </div>
        <nav className="space-y-2 p-6">
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start h-12 text-navy-text hover:bg-sky-blue hover:text-white transition-all duration-200">
              <Activity className="mr-3 h-5 w-5" />
              전체 현황
            </Button>
          </Link>
          <Link href="/student-profile">
            <Button variant="ghost" className="w-full justify-start h-12 text-navy-text hover:bg-mint-green hover:text-white transition-all duration-200">
              <User className="mr-3 h-5 w-5" />
              학생 프로필
            </Button>
          </Link>
          <Link href="/teacher-report">
            <Button variant="ghost" className="w-full justify-start h-12 bg-coral-pink/10 text-coral-pink hover:bg-coral-pink hover:text-white transition-all duration-200 font-medium">
              <PenTool className="mr-3 h-5 w-5" />
              선생님 보고서
            </Button>
          </Link>
          <Link href="/collaboration">
            <Button variant="ghost" className="w-full justify-start h-12 text-navy-text hover:bg-coral-pink hover:text-white transition-all duration-200">
              <MessageSquare className="mr-3 h-5 w-5" />
              협업 채널
            </Button>
          </Link>
          <Link href="/ai-intervention">
            <Button variant="ghost" className="w-full justify-start h-12 text-navy-text hover:bg-purple-accent hover:text-white transition-all duration-200">
              <Brain className="mr-3 h-5 w-5" />
              AI 추천 도구
            </Button>
          </Link>
          <Link href="/analytics">
            <Button variant="ghost" className="w-full justify-start h-12 text-navy-text hover:bg-sunshine-yellow hover:text-white transition-all duration-200">
              <TrendingUp className="mr-3 h-5 w-5" />
              프로젝트 분석
            </Button>
          </Link>
          <Link href="/community">
            <Button variant="ghost" className="w-full justify-start h-12 text-navy-text hover:bg-warm-orange hover:text-white transition-all duration-200">
              <MessagesSquare className="mr-3 h-5 w-5" />
              커뮤니티
            </Button>
          </Link>
          <div className="border-t border-warm-gray mt-4 pt-4">
            <Button variant="ghost" className="w-full justify-start h-12 text-soft-text hover:bg-light-gray transition-all duration-200">
              <Settings className="mr-3 h-5 w-5" />
              설정
            </Button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-coral shadow-blue">
              <PenTool className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-navy-text">선생님 보고서</h1>
              <p className="text-soft-text">학생 현황 보고 및 시나리오 생성</p>
            </div>
          </div>
        </div>

        {/* Student Selection */}
        <div className="mb-6">
          <Card className="border-0 bg-gradient-to-br from-white to-sunshine-yellow/5 shadow-medium">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-navy-text">
                <Users className="h-5 w-5 text-sunshine-yellow" />
                학생 선택
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                {studentReports.map((student) => (
                  <Button
                    key={student.id}
                    variant={selectedStudent.id === student.id ? "default" : "outline"}
                    onClick={() => setSelectedStudent(student)}
                    className={`h-12 px-6 ${
                      selectedStudent.id === student.id 
                        ? "bg-sky-blue hover:bg-sky-blue/80 text-white" 
                        : "border-sky-blue/20 text-navy-text hover:bg-sky-blue hover:text-white"
                    } transition-all duration-200`}
                  >
                    <User className="mr-2 h-4 w-4" />
                    {student.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column - Student Report */}
          <div className="space-y-6">
            {/* Student Overview */}
            <Card className="border-0 bg-gradient-to-br from-white to-mint-green/3 shadow-medium">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-lg font-bold text-navy-text">
                    <div className="p-2 rounded-lg bg-mint-green/10">
                      <FileText className="h-6 w-6 text-mint-green" />
                    </div>
                    {selectedStudent.name} 현황 보고서
                  </CardTitle>
                  <Badge className={`px-4 py-2 text-sm font-medium ${
                    selectedStudent.priority === "high" 
                      ? "bg-coral-pink text-white" 
                      : "bg-sunshine-yellow text-navy-text"
                  }`}>
                    {selectedStudent.status}
                  </Badge>
                </div>
                <CardDescription className="text-soft-text mt-2">
                  {selectedStudent.grade} | 작성일: {selectedStudent.reportDate}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Academic Performance */}
                <div>
                  <h4 className="font-bold text-navy-text mb-4 flex items-center gap-2 text-lg">
                    <TrendingUp className="h-5 w-5 text-sky-blue" />
                    학습 성취도
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(selectedStudent.subjects).map(([subject, data]) => (
                      <div key={subject} className="flex items-center justify-between p-4 rounded-xl bg-light-gray/50 hover:bg-light-gray/70 transition-colors">
                        <div className="flex items-center gap-4">
                          <span className="font-semibold text-navy-text text-base">
                            {subject === 'korean' ? '국어' : subject === 'math' ? '수학' : '사회'}
                          </span>
                          <Badge 
                            variant="outline" 
                            className={`text-sm px-3 py-1 ${
                              data.trend === 'improving' ? 'border-mint-green text-mint-green bg-mint-green/5' :
                              data.trend === 'declining' ? 'border-coral-pink text-coral-pink bg-coral-pink/5' :
                              'border-sunshine-yellow text-sunshine-yellow bg-sunshine-yellow/5'
                            }`}
                          >
                            {data.trend === 'improving' ? '향상' : 
                             data.trend === 'declining' ? '하락' : '안정'}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-navy-text text-xl">{data.score}점</div>
                          <div className="text-sm text-soft-text mt-1">{data.concern}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Behavioral Assessment */}
                <div>
                  <h4 className="font-semibold text-navy-text mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4 text-coral-pink" />
                    행동 특성
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-light-gray/50">
                      <Clock className="h-4 w-4 text-sky-blue mt-0.5" />
                      <div>
                        <span className="font-medium text-navy-text">집중력: </span>
                        <span className="text-soft-text">{selectedStudent.behavioral.attention}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-light-gray/50">
                      <Users className="h-4 w-4 text-mint-green mt-0.5" />
                      <div>
                        <span className="font-medium text-navy-text">사회성: </span>
                        <span className="text-soft-text">{selectedStudent.behavioral.social}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-light-gray/50">
                      <Star className="h-4 w-4 text-sunshine-yellow mt-0.5" />
                      <div>
                        <span className="font-medium text-navy-text">정서: </span>
                        <span className="text-soft-text">{selectedStudent.behavioral.emotional}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h4 className="font-semibold text-navy-text mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-sunshine-yellow" />
                    추천 지원 방안
                  </h4>
                  <div className="space-y-2">
                    {selectedStudent.recommendations.map((rec, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-mint-green/5 border border-mint-green/20">
                        <CheckCircle className="h-4 w-4 text-mint-green mt-0.5" />
                        <span className="text-navy-text">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Parent Feedback */}
                <div>
                  <h4 className="font-semibold text-navy-text mb-3 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-coral-pink" />
                    부모님 피드백
                  </h4>
                  <div className="p-4 rounded-lg bg-coral-pink/5 border border-coral-pink/20">
                    <p className="text-navy-text italic">"{selectedStudent.parentFeedback}"</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-soft-text">
                      <Clock className="h-3 w-3" />
                      {selectedStudent.lastUpdate}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Response & Scenario Tools */}
          <div className="space-y-6">
            {/* Reply to Parents */}
            <Card className="border-0 bg-gradient-to-br from-white to-sky-blue/3 shadow-medium">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-2 text-navy-text">
                  <div className="p-2 rounded-lg bg-sky-blue/10">
                    <Send className="h-5 w-5 text-sky-blue" />
                  </div>
                  부모님께 답장하기
                </CardTitle>
                <CardDescription className="text-soft-text">
                  부모님의 피드백에 대한 답장을 작성해주세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="안녕하세요! 민준이 어머니. 집에서도 많은 관심과 지원을 해주셔서 감사합니다..."
                  className="w-full h-32 p-4 border border-sky-blue/20 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-sky-blue/50 text-navy-text"
                />
                <div className="flex gap-2">
                  <Button className="bg-sky-blue hover:bg-sky-blue/80 text-white">
                    <Send className="mr-2 h-4 w-4" />
                    답장 보내기
                  </Button>
                  <Button variant="outline" className="border-sky-blue/20 text-navy-text hover:bg-sky-blue hover:text-white">
                    <Download className="mr-2 h-4 w-4" />
                    템플릿 저장
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Scenario Generator */}
            <Card className="border-0 bg-gradient-to-br from-white to-purple-accent/3 shadow-medium">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-2 text-navy-text">
                  <div className="p-2 rounded-lg bg-purple-accent/10">
                    <Brain className="h-5 w-5 text-purple-accent" />
                  </div>
                  AI 시나리오 생성기
                </CardTitle>
                <CardDescription className="text-soft-text">
                  학생의 어려움을 입력하면 맞춤형 시나리오를 생성합니다
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy-text">개선하고 싶은 영역</label>
                  <Input
                    value={scenarioInput}
                    onChange={(e) => setScenarioInput(e.target.value)}
                    placeholder="예: 읽기 능력, 수학 기초, 집중력 향상..."
                    className="border-purple-accent/20 focus:ring-purple-accent/50"
                  />
                </div>
                <Button 
                  onClick={generateScenario}
                  className="w-full bg-purple-accent hover:bg-purple-accent/80 text-white"
                  disabled={!scenarioInput.trim()}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  시나리오 생성하기
                </Button>

                {generatedScenario && (
                  <div className="mt-6 p-4 bg-purple-accent/5 border border-purple-accent/20 rounded-lg">
                    <h5 className="font-semibold text-navy-text mb-3 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-sunshine-yellow" />
                      생성된 시나리오
                    </h5>
                    <div className="text-sm text-navy-text whitespace-pre-line leading-relaxed">
                      {generatedScenario}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline" className="border-purple-accent/20 text-navy-text hover:bg-purple-accent hover:text-white">
                        <Download className="mr-2 h-3 w-3" />
                        PDF 저장
                      </Button>
                      <Button size="sm" variant="outline" className="border-purple-accent/20 text-navy-text hover:bg-purple-accent hover:text-white">
                        <Send className="mr-2 h-3 w-3" />
                        부모님께 공유
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 bg-gradient-to-br from-white to-warm-orange/3 shadow-medium">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-2 text-navy-text">
                  <div className="p-2 rounded-lg bg-warm-orange/10">
                    <Target className="h-5 w-5 text-warm-orange" />
                  </div>
                  빠른 작업
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start h-12 border-mint-green/20 bg-mint-green/5 text-navy-text hover:bg-mint-green hover:text-white transition-all duration-200">
                  <Calendar className="mr-3 h-4 w-4" />
                  다음 상담 일정 잡기
                </Button>
                <Button variant="outline" className="w-full justify-start h-12 border-sky-blue/20 bg-sky-blue/5 text-navy-text hover:bg-sky-blue hover:text-white transition-all duration-200">
                  <FileText className="mr-3 h-4 w-4" />
                  IEP 계획서 작성
                </Button>
                <Button variant="outline" className="w-full justify-start h-12 border-sunshine-yellow/20 bg-sunshine-yellow/5 text-navy-text hover:bg-sunshine-yellow hover:text-white transition-all duration-200">
                  <Users className="mr-3 h-4 w-4" />
                  팀 회의 요청
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}