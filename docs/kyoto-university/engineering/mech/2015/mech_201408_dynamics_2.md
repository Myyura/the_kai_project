---
sidebar_label: "2014年8月実施 機械力学 2"
tags:
  - Kyoto-University
  - Physics.Mechanics.String-Vibration
  - Mathematics.Differential-Equations.Wave-Equation
  - Mathematics.Fourier-Analysis.Fourier-Series
---

# 京都大学 工学研究科 機械工学群 2014年8月実施 機械力学 2

## **Author**
祭音Myyura (Based on [SN's answer](https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000) refined with GPT 6 Astra)

## **Description**

2. 図2-1のように、柔軟で均質かつ一様な弦（単位長さ当たりの質量が $\rho$）が、$x$ 軸の方向に張力 $T$ で張られている。弦の長さは $L$ で、その両端は固定されている。$x$ 軸と直角方向に $y$ 軸があり、弦は $xy$ 平面内で定常的に振動している。時刻 $t$ における位置 $x$ の弦の変位 $y$ は、$x$ および $t$ の2つの変数の関数になる。弦の振動は微小であり、張力 $T$ は変化しないものとする。以下の問いに答えよ。

![原題の図2-1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/engineering/mech/2015/mech_201408_dynamics_2_original_figure_1.png)

### 2-1

弦の微小部分 $dx$ の両端に働く $y$ 方向の力をそれぞれ求めよ。

### 2-2

弦の変位 $y$ に関する運動方程式を導出し、次の形になることを示せ。ここで、$c$ は正の定数である。

$$
\frac{\partial^2y}{\partial t^2}=c^2\frac{\partial^2y}{\partial x^2}\tag{1}
$$

### 2-3

この弦の変位 $y$ に関し、振動の波形を表す式を求めたい（$y=0$ は除く）。

(1) 式 (1) は、次式で表される解を持つ。

$$
y=(P\cos\alpha x+Q\sin\alpha x)(R\cos c\alpha t+S\sin c\alpha t)\tag{2}
$$

ただし、$P,Q,R,S$ および $\alpha$ は定数である。式 (2) を用い、弦の変位 $y$ に対して $P$ および $\alpha$ を定めよ。

(2) 弦の変位 $y$ に関し、2-3 (1) で得られた結果に基づき、解の重ね合わせを用いて、この振動の波形を表す最も一般的な式を求めよ。

### 2-4

音が1オクターブ高くなると、基本波の振動数（最も低い固有振動数）が倍になる。図2-2のように、楽器のピアノでは、鍵をたたくとハンマーが弦を打つことにより音がでる。いま、ある鍵をたたいたところ、その鍵より1オクターブ高い鍵に対応する弦も振動をはじめた。この現象が生じた理由を文章で説明せよ。

![原題の図2-2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/engineering/mech/2015/mech_201408_dynamics_2_original_figure_2.png)

### 题目描述

2. 如图2-1，一根柔软、均质且均匀的弦沿 $x$ 轴方向以张力 $T$ 张紧，单位长度质量为 $\rho$。弦长为 $L$，两端固定。$y$ 轴垂直于 $x$ 轴，弦在 $xy$ 平面内作稳定振动。时刻 $t$、位置 $x$ 处的弦位移 $y$ 是 $x,t$ 的二元函数。假设振动微小，张力 $T$ 不变，回答以下问题。

**2-1**

分别求弦微元 $dx$ 两端所受的 $y$ 方向的力。

**2-2**

推导弦位移 $y$ 的运动方程，并证明它具有下列形式，其中 $c$ 为正常数。

$$
\frac{\partial^2y}{\partial t^2}=c^2\frac{\partial^2y}{\partial x^2}.\qquad(1)
$$

**2-3**

求表示弦位移 $y$ 振动波形的表达式，不考虑 $y=0$。

(1) 式 (1) 有如下形式的解：

$$
y=(P\cos\alpha x+Q\sin\alpha x)(R\cos c\alpha t+S\sin c\alpha t).\qquad(2)
$$

其中 $P,Q,R,S,\alpha$ 为常数。利用式 (2)，针对弦位移 $y$ 确定 $P$ 与 $\alpha$。

(2) 根据2-3 (1) 的结果，利用解的叠加，求表示弦振动波形的最一般表达式。

**2-4**

音高升高一个八度时，基波频率（最低固有频率）变为原来的两倍。如图2-2，钢琴通过按键使琴槌敲击琴弦而发声。按下某个键后，比该键高一个八度的键所对应的琴弦也开始振动。用文字解释发生这一现象的原因。

## **Kai**

### 2-1・2-2

弦の接線と $x$ 軸の角を $\theta(x,t)$ とする。微小振動では $\sin\theta\simeq\theta\simeq y_x$ なので

$$
\begin{gathered}
\boxed{F_{y,\mathrm L}=-Ty_x(x,t)},\\
\boxed{F_{y,\mathrm R}=Ty_x(x+dx,t)
\simeq T(y_x+y_{xx}dx)}.
\end{gathered}
$$

微小区間の質量は $\rho\,dx$。運動方程式は

$$
\rho\,dx\,y_{tt}=F_{y,\mathrm L}+F_{y,\mathrm R}=Ty_{xx}\,dx.
$$

よって

$$
\boxed{y_{tt}=\frac{T}{\rho}y_{xx}=c^2y_{xx}},\qquad
\boxed{c=\sqrt{\frac{T}{\rho}}}.
$$

### 2-3 (1)

$y(0,t)=0$ より $P=0$。非自明な解について $y(L,t)=0$ より $\sin\alpha L=0$ である。正の波数を選べば

$$
\boxed{P=0,\qquad \alpha_n=\frac{n\pi}{L}\quad(n=1,2,\ldots)}.
$$

### 2-3 (2)

$$
\boxed{y(x,t)=\sum_{n=1}^{\infty}
\left[A_n\cos\left(\frac{cn\pi t}{L}\right)
+B_n\sin\left(\frac{cn\pi t}{L}\right)\right]
\sin\left(\frac{n\pi x}{L}\right)}.
$$

$A_n,B_n$ は初期条件で定まる。$y(x,0)=f(x)$、$y_t(x,0)=g(x)$ なら、正弦関数の直交性より

$$
\begin{gathered}
A_n=\frac2L\int_0^L f(x)\sin\frac{n\pi x}{L}\,dx,\\
B_n=\frac2{cn\pi}\int_0^L g(x)\sin\frac{n\pi x}{L}\,dx.
\end{gathered}
$$

### 2-4

弦の固有振動数は $f_n=nc/(2L)$。打撃された弦の振動には基音 $f_1$ とともに第2倍音 $2f_1$ が含まれる。この成分が響板や空気を介して他の弦に伝わると、基本振動数が $2f_1$ の1オクターブ上の弦が共鳴する。

## **Reference**

- [SN の解答・解説](https://bloodystream.hatenadiary.jp/entry/2021/05/06/203000)

- [原問題（平成27年度、大学公式PDFの保存版、3–4ページ）](https://web.archive.org/web/20160619031705id_/http://www.me.t.kyoto-u.ac.jp:80/ja/admission/exam/body/past_problems/files/H27_kikairikigaku)
