"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  BookOpen,
  User,
  MessageSquare,
  Brain,
  Settings,
  Users,
  GraduationCap,
  Activity,
  ArrowUp,
  AlertCircle,
  CheckCircle,
  Clock,
  MessagesSquare,
  PenTool,
} from "lucide-react"
import Link from "next/link"
import {
  BarChart,
  Bar,
  PieChart as RePieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const overviewStats = {
  totalStudents: 25,
  borderlineStudents: 25,
  receivingSupport: 6,
  needsAttention: 2,
}

const recentActivity = [
  { student: "김민준", action: "IEP 업데이트", time: "10분 전", type: "update" },
  { student: "박서연", action: "새로운 평가 완료", time: "1시간 전", type: "assessment" },
  { student: "이준호", action: "협업 채널 메시지", time: "2시간 전", type: "message" },
  { student: "최지우", action: "AI 추천 자료 확인", time: "3시간 전", type: "ai" },
]

const weeklyProgress = [
  { day: "월", completed: 4, planned: 6 },
  { day: "화", completed: 5, planned: 6 },
  { day: "수", completed: 4, planned: 6 },
  { day: "목", completed: 6, planned: 6 },
  { day: "금", completed: 3, planned: 6 },
]

const supportDistribution = [
  { name: "학습 지원", value: 3, color: "#4A90E2" },
  { name: "정서 지원", value: 1, color: "#FF6B9D" },
  { name: "사회성 지원", value: 1, color: "#9B59B6" },
  { name: "행동 지원", value: 1, color: "#FF8F47" },
]

export function OverviewDashboard() {
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
            <Button variant="ghost" className="w-full justify-start h-12 bg-sky-blue/10 text-sky-blue hover:bg-sky-blue hover:text-white transition-all duration-200 font-medium">
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
            <Button variant="ghost" className="w-full justify-start h-12 text-navy-text hover:bg-mint-green hover:text-white transition-all duration-200">
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
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-sky shadow-blue">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-navy-text">전체 현황</h1>
              <p className="text-soft-text">강원도 추천초등학교 2학년 3반</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-sky-blue/5 shadow-soft hover:shadow-blue transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="pb-3 relative z-10">
              <CardTitle className="flex items-center gap-3 text-sm font-medium text-soft-text">
                <div className="p-2 rounded-lg bg-sky-blue/10">
                  <Users className="h-4 w-4 text-sky-blue" />
                </div>
                전체 학생 수
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-navy-text">{overviewStats.totalStudents}</div>
              <p className="mt-2 text-sm text-soft-text">경계선 지적기능 학생</p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-mint-green/5 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-mint-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="pb-3 relative z-10">
              <CardTitle className="flex items-center gap-3 text-sm font-medium text-soft-text">
                <div className="p-2 rounded-lg bg-mint-green/10">
                  <CheckCircle className="h-4 w-4 text-mint-green" />
                </div>
                지원 중인 학생
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-navy-text">{overviewStats.receivingSupport}</div>
              <div className="mt-2 flex items-center text-sm">
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-mint-green/10 text-mint-green">
                  <ArrowUp className="h-3 w-3" />
                  전체의 {((overviewStats.receivingSupport / overviewStats.totalStudents) * 100).toFixed(0)}%
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-coral-pink/5 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="pb-3 relative z-10">
              <CardTitle className="flex items-center gap-3 text-sm font-medium text-soft-text">
                <div className="p-2 rounded-lg bg-coral-pink/10">
                  <AlertCircle className="h-4 w-4 text-coral-pink" />
                </div>
                주의 필요
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-navy-text">{overviewStats.needsAttention}</div>
              <p className="mt-2 text-sm text-soft-text">즉각적인 개입 필요</p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-sunshine-yellow/5 shadow-soft hover:shadow-yellow transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-sunshine-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="pb-3 relative z-10">
              <CardTitle className="flex items-center gap-3 text-sm font-medium text-soft-text">
                <div className="p-2 rounded-lg bg-sunshine-yellow/10">
                  <GraduationCap className="h-4 w-4 text-sunshine-yellow" />
                </div>
                평균 개선율
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-navy-text">78%</div>
              <div className="mt-2 flex items-center text-sm">
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-mint-green/10 text-mint-green">
                  <ArrowUp className="h-3 w-3" />
                  +3.2% 전월 대비
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Weekly Progress Chart */}
          <Card className="border-0 bg-gradient-to-br from-white to-mint-green/3 shadow-medium hover:shadow-strong transition-all duration-300">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-2 text-navy-text">
                <div className="p-2 rounded-lg bg-mint-green/10">
                  <TrendingUp className="h-5 w-5 text-mint-green" />
                </div>
                주간 중재 활동
              </CardTitle>
              <CardDescription className="text-soft-text">이번 주 계획 대비 완료 현황</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyProgress}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" fill="#7ED4AD" name="완료" />
                  <Bar dataKey="planned" fill="#F0F2F5" name="계획" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Support Distribution */}
          <Card className="border-0 bg-gradient-to-br from-white to-sky-blue/3 shadow-medium hover:shadow-blue transition-all duration-300">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-2 text-navy-text">
                <div className="p-2 rounded-lg bg-sky-blue/10">
                  <Users className="h-5 w-5 text-sky-blue" />
                </div>
                지원 유형별 분포
              </CardTitle>
              <CardDescription className="text-soft-text">현재 진행 중인 지원 프로그램</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RePieChart>
                  <Pie
                    data={supportDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name} (${value}명)`}
                  >
                    {supportDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2 border-0 bg-gradient-to-br from-white to-warm-gray/20 shadow-medium">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-2 text-navy-text">
                <div className="p-2 rounded-lg bg-warm-orange/10">
                  <Activity className="h-5 w-5 text-warm-orange" />
                </div>
                최근 활동
              </CardTitle>
              <CardDescription className="text-soft-text">실시간 학생 지원 활동 현황</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-4 rounded-xl border-0 bg-white/80 backdrop-blur-sm p-4 shadow-soft hover:shadow-medium transition-all duration-200">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        activity.type === "update"
                          ? "bg-sky-blue/10 text-sky-blue"
                          : activity.type === "assessment"
                            ? "bg-mint-green/10 text-mint-green"
                            : activity.type === "message"
                              ? "bg-coral-pink/10 text-coral-pink"
                              : "bg-sunshine-yellow/10 text-sunshine-yellow"
                      }`}
                    >
                      {activity.type === "update" && <User className="h-5 w-5" />}
                      {activity.type === "assessment" && <CheckCircle className="h-5 w-5" />}
                      {activity.type === "message" && <MessageSquare className="h-5 w-5" />}
                      {activity.type === "ai" && <Brain className="h-5 w-5" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-navy-text">{activity.student}</p>
                      <p className="text-sm text-soft-text mt-1">{activity.action}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-light-gray text-sm text-soft-text">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-white to-sunshine-yellow/3 shadow-medium">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-2 text-navy-text">
                <div className="p-2 rounded-lg bg-sunshine-yellow/10">
                  <Settings className="h-5 w-5 text-sunshine-yellow" />
                </div>
                빠른 작업
              </CardTitle>
              <CardDescription className="text-soft-text">자주 사용하는 기능</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/student-profile">
                <Button variant="ghost" className="w-full justify-start h-12 border border-mint-green/20 bg-mint-green/5 text-navy-text hover:bg-mint-green hover:text-white transition-all duration-200">
                  <User className="mr-3 h-4 w-4" />
                  학생 프로필 보기
                </Button>
              </Link>
              <Link href="/collaboration">
                <Button variant="ghost" className="w-full justify-start h-12 border border-coral-pink/20 bg-coral-pink/5 text-navy-text hover:bg-coral-pink hover:text-white transition-all duration-200">
                  <MessageSquare className="mr-3 h-4 w-4" />
                  협업 채널 열기
                </Button>
              </Link>
              <Link href="/ai-intervention">
                <Button variant="ghost" className="w-full justify-start h-12 border border-purple-accent/20 bg-purple-accent/5 text-navy-text hover:bg-purple-accent hover:text-white transition-all duration-200">
                  <Brain className="mr-3 h-4 w-4" />
                  AI 추천 받기
                </Button>
              </Link>
              <Link href="/analytics">
                <Button variant="ghost" className="w-full justify-start h-12 border border-sky-blue/20 bg-sky-blue/5 text-navy-text hover:bg-sky-blue hover:text-white transition-all duration-200">
                  <TrendingUp className="mr-3 h-4 w-4" />
                  프로젝트 분석 보기
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Students Needing Attention */}
        <Card className="mt-8 border-0 bg-gradient-to-br from-white to-coral-pink/5 shadow-medium">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-3 text-navy-text">
              <div className="p-2 rounded-lg bg-coral-pink/10">
                <AlertCircle className="h-6 w-6 text-coral-pink" />
              </div>
              주의가 필요한 학생
            </CardTitle>
            <CardDescription className="text-soft-text">즉각적인 개입이 필요한 학생 목록</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  name: "이준호",
                  issue: "행동 문제 증가",
                  lastUpdate: "2일 전",
                  priority: "high",
                },
                {
                  name: "정수아",
                  issue: "학습 참여도 감소",
                  lastUpdate: "3일 전",
                  priority: "medium",
                },
              ].map((student, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-xl border-0 bg-white/80 backdrop-blur-sm p-5 shadow-soft hover:shadow-medium transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                      student.priority === "high" 
                        ? "bg-coral-pink/10" 
                        : "bg-sunshine-yellow/10"
                    }`}>
                      <User className={`h-6 w-6 ${
                        student.priority === "high" 
                          ? "text-coral-pink" 
                          : "text-sunshine-yellow"
                      }`} />
                    </div>
                    <div>
                      <p className="font-bold text-navy-text text-lg">{student.name}</p>
                      <p className="text-sm text-soft-text mt-1">{student.issue}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-soft-text px-3 py-1 bg-light-gray rounded-full">{student.lastUpdate}</span>
                    <Badge 
                      className={`px-3 py-1 text-white font-medium ${
                        student.priority === "high" 
                          ? "bg-coral-pink hover:bg-coral-pink/80" 
                          : "bg-sunshine-yellow hover:bg-sunshine-yellow/80 text-navy-text"
                      }`}
                    >
                      {student.priority === "high" ? "긴급" : "주의"}
                    </Badge>
                    <Link href="/student-profile">
                      <Button className="bg-sky-blue hover:bg-sky-blue/80 text-white px-6 py-2 h-10">
                        상세보기
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
