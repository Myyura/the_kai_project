---
sidebar_label: "2016年度 II-2（量子力学）"
tags:
  - Kyoto-University
  - Physics.Quantum-Mechanics.Wavefunction-Matching-at-Potential-Steps
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2016年度 II-2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量 $m$ の一粒子が図1の一次元ポテンシャル

$$
V(x)=\begin{cases}-U&b\le|x|\le a+b,\\0&|x|<b\ \text{または}\ |x|>a+b\end{cases}
\qquad(U>0,a>0,b\ge0)
$$

に束縛される。実波動関数 $\phi$ は $-\hbar^2\phi''/(2m)+V\phi=E\phi$、$E<0$ を満たし、正または負パリティを持つ。$a,U$ を固定して $b$ を変化させる。

![図1：対称二重井戸ポテンシャル（原題）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2016-II-2-fig1.png)

1. $b=0$ では幅 $2a$、深さ $U$ の井戸となる。$\gamma=\sqrt{-2mE}/\hbar$、$\beta=\sqrt{2m(E+U)}/\hbar$ とし、各パリティについて $\gamma$ を $\beta,a$ で表せ。
2. $b>0$ が十分小さい場合を摂動論で考える。
   - (a) $b=0$ の波動関数を $\phi^{(0)}$ とし、$\phi_0=\phi^{(0)}(0)$、$\phi_a=\phi^{(0)}(a)$ とする。各パリティについて $\phi_0$ を $\phi_a,\beta,a$ で表し、絶対値を比較せよ。
   - (b) $\Delta V=V-V^{(0)}$ による一次エネルギー補正を $b$ の一次まで求め、$\Delta E=E-E^{(0)}$ の符号を答えよ。$\phi^{(0)}$ は全空間で規格化されている。
3. $b=0$ で $2n+1$ 個（$n$ は正整数）の束縛状態があり、低い順に正負のパリティが交互に並ぶとする。ある $b_c$ を超えると負パリティの第 $2n+2$ 状態が現れ、$b\to b_c+0$ で $E\to0^-$ となる。
   - (a) $x\ge a+b$ で $\phi_{2n+2}(x)/\phi_{2n+2}(a+b)$ を $\gamma$ で表し、$b\to b_c+0$ の極限を求めよ。
   - (b) 同じ極限で $-b\le x\le b$ の $\phi_{2n+2}(x)/\phi_{2n+2}(b)$ を求めよ。
   - (c) $b<x<a+b$ にある第 $2n+2$ 状態の節の数を求めよ。この状態は有限の $|x|$ の範囲に全体で $2n+1$ 個の節を持つことを用いてよい。
   - (d) $n=1$ の閾値の波動関数を図示せよ。$\phi_{2n+2}(a+b)=1$ とする。
   - (e) $\beta_0=\sqrt{2mU}/\hbar$ として $b_c$ を $\beta_0,a$ で表せ。

#### 题目描述

如上图1，质量 $m$ 的粒子处于一维对称双阱：$b\le|x|\le a+b$ 时势能为 $-U$，其余为零，$U,a>0,b\ge0$。束缚态能量 $E<0$，实波函数满足薛定谔方程且有确定宇称。固定 $a,U$ 改变 $b$。

1. $b=0$ 是宽 $2a$、深 $U$ 的单阱。定义 $\gamma=\sqrt{-2mE}/\hbar$、$\beta=\sqrt{2m(E+U)}/\hbar$，求两种宇称的 $\gamma(\beta,a)$。
2. 对小 $b>0$ 用微扰论：(a) 令 $\phi_0=\phi^{(0)}(0)$、$\phi_a=\phi^{(0)}(a)$，分别表示 $\phi_0$ 并比较绝对值；(b) 对归一化初态计算 $\Delta V=V-V^{(0)}$ 的一阶能量修正，保留 $b$ 的一阶并判断正负。
3. 若 $b=0$ 有 $2n+1$ 个束缚态，$n$ 为正整数，宇称从基态起正负交替；$b>b_c$ 时多出负宇称的第 $2n+2$ 态，在 $b\to b_c+0$ 时能量趋零。
   - (a) 求右外区 $\phi(x)/\phi(a+b)$ 及阈值极限。
   - (b) 求阈值时中央区 $\phi(x)/\phi(b)$。
   - (c) 已知全波函数共 $2n+1$ 个有限位置节点，求右阱内的节点数。
   - (d) 对 $n=1$ 画出阈值波函数，取 $\phi(a+b)=1$。
   - (e) 定义 $\beta_0=\sqrt{2mU}/\hbar$，求 $b_c$。

## **Kai**

### (1)
井戸内の解は正パリティで $A\cos\beta x$、負パリティで $A\sin\beta x$。$x>a$ では減衰解 $Be^{-\gamma(x-a)}$ であり、$x=a$ における対数微分の一致から

$$
\boxed{\gamma=\beta\tan\beta a\quad(\text{正}),\qquad
\gamma=-\beta\cot\beta a\quad(\text{負})}.
$$

### (2a)
正パリティでは

$$
\boxed{\phi_0=\frac{\phi_a}{\cos\beta a},\qquad |\phi_0|>|\phi_a|}.
$$

束縛状態では $\gamma>0$ なので $|\cos\beta a|<1$。負パリティでは

$$
\boxed{\phi_0=0,\qquad |\phi_0|<|\phi_a|}.
$$

### (2b)
$|x|<b$ に $+U$、$a<|x|<a+b$ に $-U$ のポテンシャル変化がある。したがって

$$
\Delta E^{(1)}=2U\left[\int_0^b(\phi^{(0)})^2dx-\int_a^{a+b}(\phi^{(0)})^2dx\right]
=\boxed{2Ub(\phi_0^2-\phi_a^2)+O(b^2)}.
$$

正パリティでは増加、負パリティでは減少する。
### (3a)

$$
\boxed{\frac{\phi(x)}{\phi(a+b)}=e^{-\gamma[x-(a+b)]}\longrightarrow1}
$$

である。これは固定された有限の $x$ での極限であり、閾値解自体は全空間で規格化できない。
### (3b)
$E=V=0$ の中央区で $\phi''=0$、負パリティから定数項はゼロ。

$$
\boxed{\frac{\phi(x)}{\phi(b)}=\frac xb}.
$$

### (3c)
中央区の負パリティ解は $E<0$ で $\sinh\gamma x$ に比例し、節は原点だけ。外側の指数関数に節はない。残る $2n$ 個は左右の井戸に対称に分布するから、右井戸内には $\boxed{n\text{ 個}}$。
### (3d)
$a+b_c$ で値 1、微分ゼロとなるようにすると、正の半軸上の閾値解は

$$
\boxed{\phi(x)=\begin{cases}
(x/b_c)\cos(\beta_0a)&0\le x\le b_c,\\
\cos[\beta_0(x-a-b_c)]&b_c\le x\le a+b_c,\\
1&x\ge a+b_c,
\end{cases}\qquad\phi(-x)=-\phi(x)}.
$$

$n=1$ では右井戸内に節が一つあり、中央で負の傾き、左右の外側でそれぞれ $-1,+1$ に平坦になる。例として $\beta_0a=5\pi/4$ を選ぶと、右井戸内で $-1$ の極小を一度とり、その後ゼロを横切って $+1$ へ達する。
### (3e)
$x=b_c$ の微分の連続性より

$$
\frac{\cos(\beta_0a)}{b_c}=\beta_0\sin(\beta_0a),
\qquad\boxed{b_c=\frac{\cot(\beta_0a)}{\beta_0}}.
$$

$b=0$ で $2n+1$ 個の束縛状態を持つ範囲では $n\pi<\beta_0a\le(n+1/2)\pi$、したがって $b_c\ge0$。端点では $b_c=0$ として極限をとる。

![奇パリティ状態の束縛閾値](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/2016-II-2-threshold-state.svg)

## **Reference**

- [京都大学公式問題（2016年度、PDF 11–12ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H28.pdf)
