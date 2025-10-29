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
  MessagesSquare,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  Eye,
  Edit,
  Plus,
  X,
  MessageCircle,
  Paperclip,
  Smile
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// 학생 데이터
const studentsData = [
  {
    id: 1,
    name: "김민준",
    grade: "2학년 3반",
    age: 8,
    photo: "/placeholder-user.jpg",
    status: "주의 필요",
    priority: "high",
    lastActivity: "2시간 전",
    parentContact: {
      mother: { name: "김영희", phone: "010-1234-5678", email: "kim@email.com" },
      father: { name: "김철수", phone: "010-8765-4321", email: "chul@email.com" }
    },
    address: "강원도 춘천시 중앙로 123",
    subjects: {
      korean: { score: 65, trend: "declining", concern: "읽기 이해력 부족" },
      math: { score: 58, trend: "stable", concern: "기초 연산 어려움" },
      social: { score: 72, trend: "improving", concern: "집중력 향상 필요" }
    },
    behavioral: {
      attention: "30분 이상 집중 어려움",
      social: "또래와의 상호작용 소극적",
      emotional: "스트레스 상황에서 위축",
      strengths: ["그림 그리기", "음악 감상", "동물 관심"]
    },
    recentMessages: [
      { sender: "어머니", content: "어제 집에서 책을 많이 읽었어요!", time: "1시간 전", isFromParent: true },
      { sender: "선생님", content: "민준이가 오늘 수업에 적극적으로 참여했네요!", time: "3시간 전", isFromParent: false },
      { sender: "어머니", content: "수학 숙제에 대해 문의드리고 싶습니다.", time: "1일 전", isFromParent: true }
    ],
    attendance: {
      present: 18,
      absent: 2,
      late: 1,
      percentage: 90
    }
  },
  {
    id: 2,
    name: "박서연",
    grade: "2학년 3반",
    age: 8,
    photo: "/placeholder-user.jpg",
    status: "양호",
    priority: "medium",
    lastActivity: "30분 전",
    parentContact: {
      mother: { name: "박미영", phone: "010-2345-6789", email: "park@email.com" },
      father: { name: "박진우", phone: "010-9876-5432", email: "jin@email.com" }
    },
    address: "강원도 춘천시 효자동 456",
    subjects: {
      korean: { score: 78, trend: "improving", concern: "쓰기 표현력 향상 중" },
      math: { score: 82, trend: "stable", concern: "문제 해결 과정 설명 부족" },
      social: { score: 85, trend: "improving", concern: "발표력 좋음" }
    },
    behavioral: {
      attention: "50분 집중 가능",
      social: "리더십 성향, 친구들과 원활한 관계",
      emotional: "안정적, 자신감 있음",
      strengths: ["발표하기", "리더십", "친구 도움"]
    },
    recentMessages: [
      { sender: "어머니", content: "서연이가 요즘 학교 이야기를 많이 해요!", time: "30분 전", isFromParent: true },
      { sender: "선생님", content: "서연이의 발표가 정말 훌륭했습니다.", time: "2시간 전", isFromParent: false },
      { sender: "어머니", content: "다음 주 상담 일정을 잡고 싶습니다.", time: "2일 전", isFromParent: true }
    ],
    attendance: {
      present: 20,
      absent: 0,
      late: 1,
      percentage: 95
    }
  },
  {
    id: 3,
    name: "이준호",
    grade: "2학년 3반", 
    age: 9,
    photo: "/placeholder-user.jpg",
    status: "관찰 중",
    priority: "medium",
    lastActivity: "1일 전",
    parentContact: {
      mother: { name: "이수진", phone: "010-3456-7890", email: "lee@email.com" },
      father: { name: "이동혁", phone: "010-0987-6543", email: "dong@email.com" }
    },
    address: "강원도 춘천시 석사동 789",
    subjects: {
      korean: { score: 70, trend: "stable", concern: "독해력 보통" },
      math: { score: 75, trend: "improving", concern: "계산 실수 줄어듦" },
      social: { score: 68, trend: "declining", concern: "집중력 저하" }
    },
    behavioral: {
      attention: "40분 집중 가능하나 변동",
      social: "활발하나 때때로 과도함",
      emotional: "기분 변화가 있음",
      strengths: ["체육 활동", "창의적 사고", "호기심"]
    },
    recentMessages: [
      { sender: "어머니", content: "준호가 오늘 학교에서 어떤 모습이었나요?", time: "1일 전", isFromParent: true },
      { sender: "선생님", content: "오늘 체육시간에 정말 열심히 참여했어요!", time: "1일 전", isFromParent: false }
    ],
    attendance: {
      present: 19,
      absent: 1,
      late: 1,
      percentage: 95
    }
  }
]

export default function StudentManagementPage() {
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [showStudentDetail, setShowStudentDetail] = useState(false)
  const [showMessenger, setShowMessenger] = useState(false)
  const [showScenarioGenerator, setShowScenarioGenerator] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [newMessage, setNewMessage] = useState("")
  const [scenarioInput, setScenarioInput] = useState("")
  const [generatedScenario, setGeneratedScenario] = useState("")

  const filteredStudents = studentsData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || student.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const generateScenario = () => {
    const scenarios = {
      "읽기": `📚 **${selectedStudent?.name} 맞춤형 읽기 개선 시나리오**

**현재 상황:** ${selectedStudent?.subjects.korean.concern}
**목표:** 6주간 단계적 읽기 능력 향상

**1단계 (1-2주차): 흥미 유발**
- ${selectedStudent?.behavioral.strengths[0] || "관심 분야"}와 연관된 책 선정
- 그림책부터 시작하여 부담 줄이기
- 매일 15분 함께 읽기

**2단계 (3-4주차): 기초 다지기**
- 문장별 번갈아 읽기
- 모르는 단어 함께 찾아보기
- 읽은 내용 그림으로 표현하기

**3단계 (5-6주차): 독립 읽기**
- 혼자서 짧은 글 읽기 도전
- 읽은 후 간단한 질문 답하기
- 가족에게 읽어주기

**평가 및 보상:**
- 주간 읽기 일지 작성
- 월말 독서 인증서 수여
- 좋아하는 ${selectedStudent?.behavioral.strengths[1] || "활동"} 시간 추가 제공`,

      "수학": `🔢 **${selectedStudent?.name} 맞춤형 수학 학습 시나리오**

**현재 상황:** ${selectedStudent?.subjects.math.concern}
**목표:** 기초 연산 능력 향상 및 수학에 대한 자신감 회복

**1단계: 구체물 활용 학습**
- 블록, 구슬 등으로 수의 개념 익히기
- 놀이를 통한 덧셈뺄셈 연습
- ${selectedStudent?.behavioral.strengths[0] || "좋아하는 활동"}과 연결

**2단계: 생활 속 수학**
- 간식 나누어주기로 나눗셈 학습
- 시간 읽기 연습
- 용돈 계산하기

**3단계: 문제 해결**
- 단계별 문제 해결 방법 익히기
- 틀려도 괜찮다는 분위기 조성
- 성공 경험 누적

**부모님과 함께:**
- 마트에서 계산 도우미 역할
- 요리할 때 계량 경험
- 매일 작은 성취 인정하기`,

      "집중력": `🎯 **${selectedStudent?.name} 집중력 향상 시나리오**

**현재 상황:** ${selectedStudent?.behavioral.attention}
**목표:** 점진적 집중 시간 연장

**환경 조성:**
- 방해 요소 최소화
- ${selectedStudent?.behavioral.strengths.join(", ")} 활용한 동기 부여
- 집중할 수 있는 조용한 공간 마련

**단계별 훈련:**
- 1주차: 10분 집중 → 5분 휴식
- 2주차: 15분 집중 → 5분 휴식  
- 3주차: 20분 집중 → 10분 휴식
- 4주차: 25분 집중 → 10분 휴식

**집중력 향상 활동:**
- 퍼즐 맞추기 (${selectedStudent?.behavioral.strengths[0] || "관심사"} 관련)
- 짧은 책 읽기
- 그림 그리기
- 간단한 만들기 활동

**보상 시스템:**
- 목표 달성 시 스티커 부여
- 주간 목표 달성 시 특별 활동
- 꾸준한 격려와 인정`
    }

    const keyword = Object.keys(scenarios).find(key => 
      scenarioInput.includes(key) || 
      (key === "집중력" && scenarioInput.includes("집중"))
    ) || "읽기"
    
    setGeneratedScenario(scenarios[keyword])
  }

  const sendMessage = () => {
    if (!newMessage.trim()) return
    // 메시지 전송 로직
    setNewMessage("")
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
          <Link href="/student-management">
            <Button variant="ghost" className="w-full justify-start h-12 bg-mint-green/10 text-mint-green hover:bg-mint-green hover:text-white transition-all duration-200 font-medium">
              <Users className="mr-3 h-5 w-5" />
              학생 관리
            </Button>
          </Link>
          <Link href="/teacher-report">
            <Button variant="ghost" className="w-full justify-start h-12 text-navy-text hover:bg-coral-pink hover:text-white transition-all duration-200">
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
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-mint shadow-blue">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-navy-text">학생 관리</h1>
              <p className="text-soft-text">학생 정보 조회, 메신저, 시나리오 생성</p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-soft-text" />
              <Input
                placeholder="학생 이름으로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-sky-blue/20 focus:ring-sky-blue/50"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 border border-sky-blue/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue/50 text-navy-text h-12"
            >
              <option value="all">전체 상태</option>
              <option value="주의 필요">주의 필요</option>
              <option value="양호">양호</option>
              <option value="관찰 중">관찰 중</option>
            </select>
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {filteredStudents.map((student) => (
            <Card key={student.id} className="group border-0 bg-gradient-to-br from-white to-sky-blue/5 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-sky-blue/20"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs ${
                      student.status === "주의 필요" ? "bg-coral-pink" :
                      student.status === "양호" ? "bg-mint-green" : "bg-sunshine-yellow"
                    }`}>
                      {student.status === "주의 필요" ? "!" : 
                       student.status === "양호" ? "✓" : "●"}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-navy-text">{student.name}</h3>
                    <p className="text-soft-text text-sm">{student.grade}</p>
                    <Badge className={`mt-1 text-xs ${
                      student.priority === "high" ? "bg-coral-pink text-white" :
                      student.priority === "medium" ? "bg-sunshine-yellow text-navy-text" :
                      "bg-mint-green text-white"
                    }`}>
                      {student.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-soft-text">출석률</span>
                  <span className="font-semibold text-navy-text">{student.attendance.percentage}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-soft-text">최근 활동</span>
                  <span className="text-navy-text">{student.lastActivity}</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    onClick={() => {
                      setSelectedStudent(student)
                      setShowStudentDetail(true)
                    }}
                    className="flex-1 bg-sky-blue hover:bg-sky-blue/80 text-white"
                  >
                    <Eye className="mr-2 h-3 w-3" />
                    상세보기
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSelectedStudent(student)
                      setShowMessenger(true)
                    }}
                    className="border-mint-green text-mint-green hover:bg-mint-green hover:text-white"
                  >
                    <MessageCircle className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSelectedStudent(student)
                      setShowScenarioGenerator(true)
                    }}
                    className="border-purple-accent text-purple-accent hover:bg-purple-accent hover:text-white"
                  >
                    <Brain className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Student Detail Modal */}
        {showStudentDetail && selectedStudent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-warm-gray">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={selectedStudent.photo}
                      alt={selectedStudent.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-sky-blue/20"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-navy-text">{selectedStudent.name}</h2>
                      <p className="text-soft-text">{selectedStudent.grade} | {selectedStudent.age}세</p>
                      <Badge className={`mt-1 ${
                        selectedStudent.priority === "high" ? "bg-coral-pink text-white" :
                        selectedStudent.priority === "medium" ? "bg-sunshine-yellow text-navy-text" :
                        "bg-mint-green text-white"
                      }`}>
                        {selectedStudent.status}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setShowStudentDetail(false)}
                    className="text-soft-text hover:text-navy-text"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              <div className="p-6 grid gap-6 md:grid-cols-2">
                {/* Contact Information */}
                <Card className="border-sky-blue/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-navy-text">
                      <Phone className="h-5 w-5 text-sky-blue" />
                      연락처 정보
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-navy-text mb-2">어머니</h4>
                      <div className="space-y-1 text-sm">
                        <p>{selectedStudent.parentContact.mother.name}</p>
                        <p className="text-soft-text">{selectedStudent.parentContact.mother.phone}</p>
                        <p className="text-soft-text">{selectedStudent.parentContact.mother.email}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-text mb-2">아버지</h4>
                      <div className="space-y-1 text-sm">
                        <p>{selectedStudent.parentContact.father.name}</p>
                        <p className="text-soft-text">{selectedStudent.parentContact.father.phone}</p>
                        <p className="text-soft-text">{selectedStudent.parentContact.father.email}</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-coral-pink mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-navy-text">주소</h4>
                          <p className="text-sm text-soft-text">{selectedStudent.address}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Academic Performance */}
                <Card className="border-mint-green/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-navy-text">
                      <TrendingUp className="h-5 w-5 text-mint-green" />
                      학습 성취도
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(selectedStudent.subjects).map(([subject, data]) => (
                      <div key={subject} className="flex items-center justify-between p-3 rounded-lg bg-light-gray/50">
                        <div>
                          <span className="font-medium text-navy-text">
                            {subject === 'korean' ? '국어' : subject === 'math' ? '수학' : '사회'}
                          </span>
                          <p className="text-xs text-soft-text">{data.concern}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-lg text-navy-text">{data.score}점</span>
                          <Badge
                            variant="outline"
                            className={`ml-2 text-xs ${
                              data.trend === 'improving' ? 'border-mint-green text-mint-green' :
                              data.trend === 'declining' ? 'border-coral-pink text-coral-pink' :
                              'border-sunshine-yellow text-sunshine-yellow'
                            }`}
                          >
                            {data.trend === 'improving' ? '향상' : 
                             data.trend === 'declining' ? '하락' : '안정'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Behavioral Assessment */}
                <Card className="border-coral-pink/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-navy-text">
                      <Target className="h-5 w-5 text-coral-pink" />
                      행동 특성
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-medium text-navy-text mb-1">집중력</h4>
                      <p className="text-sm text-soft-text">{selectedStudent.behavioral.attention}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-text mb-1">사회성</h4>
                      <p className="text-sm text-soft-text">{selectedStudent.behavioral.social}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-text mb-1">정서</h4>
                      <p className="text-sm text-soft-text">{selectedStudent.behavioral.emotional}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-text mb-1">강점</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedStudent.behavioral.strengths.map((strength, idx) => (
                          <Badge key={idx} className="bg-sunshine-yellow/10 text-sunshine-yellow border-sunshine-yellow/20">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Attendance */}
                <Card className="border-sunshine-yellow/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-navy-text">
                      <Calendar className="h-5 w-5 text-sunshine-yellow" />
                      출석 현황
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-mint-green">{selectedStudent.attendance.present}</div>
                        <div className="text-xs text-soft-text">출석</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-coral-pink">{selectedStudent.attendance.absent}</div>
                        <div className="text-xs text-soft-text">결석</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-sunshine-yellow">{selectedStudent.attendance.late}</div>
                        <div className="text-xs text-soft-text">지각</div>
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-soft-text">출석률</span>
                        <span className="text-xl font-bold text-navy-text">{selectedStudent.attendance.percentage}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Messenger Modal */}
        {showMessenger && selectedStudent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] flex flex-col">
              <div className="p-4 border-b border-warm-gray">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedStudent.photo}
                      alt={selectedStudent.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-navy-text">{selectedStudent.name} 가족과의 대화</h3>
                      <p className="text-sm text-soft-text">학부모님과 소통하세요</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setShowMessenger(false)}
                    className="text-soft-text hover:text-navy-text"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {selectedStudent.recentMessages.map((message, idx) => (
                  <div key={idx} className={`flex ${message.isFromParent ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isFromParent 
                        ? 'bg-light-gray text-navy-text' 
                        : 'bg-sky-blue text-white'
                    }`}>
                      <div className="font-medium text-sm mb-1">{message.sender}</div>
                      <div>{message.content}</div>
                      <div className={`text-xs mt-1 ${
                        message.isFromParent ? 'text-soft-text' : 'text-sky-blue-100'
                      }`}>
                        {message.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-warm-gray">
                <div className="flex gap-2">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="메시지를 입력하세요..."
                    className="flex-1 border-sky-blue/20 focus:ring-sky-blue/50"
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  />
                  <Button
                    onClick={sendMessage}
                    className="bg-sky-blue hover:bg-sky-blue/80 text-white"
                    disabled={!newMessage.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Scenario Generator Modal */}
        {showScenarioGenerator && selectedStudent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-warm-gray">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-accent/10">
                      <Brain className="h-6 w-6 text-purple-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-text">{selectedStudent.name} 맞춤형 시나리오 생성</h3>
                      <p className="text-soft-text">학생의 특성에 맞는 교육 시나리오를 생성합니다</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setShowScenarioGenerator(false)}
                    className="text-soft-text hover:text-navy-text"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-mint-green/20">
                    <CardHeader>
                      <CardTitle className="text-navy-text">학생 정보 요약</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <span className="font-medium">학습 상황:</span>
                        <div className="text-sm text-soft-text mt-1">
                          {Object.entries(selectedStudent.subjects).map(([subject, data]) => (
                            <div key={subject}>
                              {subject === 'korean' ? '국어' : subject === 'math' ? '수학' : '사회'}: {data.concern}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">행동 특성:</span>
                        <p className="text-sm text-soft-text">{selectedStudent.behavioral.attention}</p>
                      </div>
                      <div>
                        <span className="font-medium">강점:</span>
                        <p className="text-sm text-soft-text">{selectedStudent.behavioral.strengths.join(", ")}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-accent/20">
                    <CardHeader>
                      <CardTitle className="text-navy-text">시나리오 생성</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-navy-text">개선 영역 선택</label>
                        <Input
                          value={scenarioInput}
                          onChange={(e) => setScenarioInput(e.target.value)}
                          placeholder="예: 읽기, 수학, 집중력..."
                          className="mt-1 border-purple-accent/20 focus:ring-purple-accent/50"
                        />
                      </div>
                      <Button 
                        onClick={generateScenario}
                        className="w-full bg-purple-accent hover:bg-purple-accent/80 text-white"
                        disabled={!scenarioInput.trim()}
                      >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        맞춤형 시나리오 생성
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {generatedScenario && (
                  <Card className="border-sunshine-yellow/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-navy-text">
                        <Lightbulb className="h-5 w-5 text-sunshine-yellow" />
                        생성된 맞춤형 시나리오
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-navy-text whitespace-pre-line leading-relaxed bg-sunshine-yellow/5 p-4 rounded-lg">
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
                        <Button size="sm" variant="outline" className="border-purple-accent/20 text-navy-text hover:bg-purple-accent hover:text-white">
                          <Edit className="mr-2 h-3 w-3" />
                          시나리오 수정
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}