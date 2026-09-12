---
sidebar_label: 2010年8月実施 専門科目 制御工学
tags:
  - Kyoto-University
  - Electrical-Electronic.Control-Theory.Step-Response
  - Electrical-Electronic.Control-Theory.Transfer-Function
  - Electrical-Electronic.Control-Theory.Nyquist-Stability-Criterion
  - Electrical-Electronic.Control-Theory.Bode-Plot-and-Stability-Margins
  - Electrical-Electronic.Control-Theory.Proportional-Integral-Derivative-and-Integral-Proportional-Derivative-Control
---
# 京都大学 情報学研究科 システム科学専攻 2010年8月実施 専門科目 制御工学

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
伝達関数 $3/(s+2)$ のゲイン $K$ と時定数 $T$ を求め、これらを明示したステップ応答の概形を描け。

### 問題2
図1の負帰還系について答えよ。ただし $P(s)=1/(s+1)^3$ とする。

![図1：ゲイン K と P(s) の単位負帰還系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2011/sys_201008_control_theory_feedback.svg)

(1) $P(j\omega)$ のベクトル軌跡（$\omega:0\to\infty$）の概形を描け。始点、終点、実軸との交点の座標とその角周波数を明示せよ。

(2) ナイキストの安定判別法を説明し、(1) に基づいて $K=0.8$ の安定性を判別せよ。安定ならゲイン余裕を dB で求めよ。

(3) $K=4$、$r(t)=2\sin t$ のとき、定常出力が $y(t)=a\sin(bt+c)$ であった。$(a,b,c)$ を求めよ。

### 問題3
補償要素の伝達関数は $(s^2+11s+10)/s$ である。

(1) 角周波数 $0.01\le\omega\le1000$ のゲイン線図を描け。折れ線近似でよい。

(2) この要素を PID 補償という。一般にどのような目的で用いるか述べ、I 補償、D 補償の役割も説明せよ。

#### 题目描述

**问题1** 求系统 $3/(s+2)$ 的直流增益 $K$、时间常数 $T$，并在阶跃响应图中标明。

**问题2** 图1为 $K$ 与 $P(s)=1/(s+1)^3$ 串联后的单位负反馈系统。(1) 画出 $\omega$ 从零到无穷时的 $P(j\omega)$ 轨迹，标出起终点、与实轴的交点及相应频率。(2) 说明 Nyquist 稳定判据，据图判断 $K=0.8$ 是否稳定，稳定时求以 dB 为单位的增益裕度。(3) 当 $K=4,r(t)=2\sin t$ 时，稳态输出为 $a\sin(bt+c)$，求 $(a,b,c)$。

**问题3** 补偿器为 $(s^2+11s+10)/s$。(1) 画出频率 $0.01$ 至 $1000$ 的幅频增益图，可以用渐近折线。(2) 说明 PID 补偿的目的，以及积分 I、微分 D 的作用。

## **Kai**

### 問題1

$$
\frac3{s+2}=\frac{3/2}{1+s/2}
\quad\Longrightarrow\quad\boxed{K=\frac32,\quad T=\frac12}.
$$

単位ステップ応答は $\boxed{y(t)=\frac32(1-e^{-2t}),\ t\ge0}$。$y(T)=K(1-e^{-1})$、初期接線は時刻 $T$ で最終値 $K$ と交わる。

![一次遅れのステップ応答と P(jω) のベクトル軌跡](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2011/sys_201008_control_theory_response_nyquist.svg)

### 問題2
(1) 実部と虚部は

$$
P(j\omega)=\frac{1-3\omega^2+i(\omega^3-3\omega)}{(1+\omega^2)^3}.
$$

始点は $\boxed{(1,0)\ (\omega=0)}$。下半面から出発し、$\boxed{(-1/8,0)\ (\omega=\sqrt3)}$ で実軸を横切り、上半面から $\boxed{(0,0)\ (\omega\to\infty)}$ に近づく。

(2) 開ループ $L=KP$ の右半平面極の個数と、ナイキスト軌跡の $-1$ の回りの周回数から、$1+L$ の右半平面零点、すなわち閉ループの不安定極の個数を判定する。ここでは開ループに右半平面極はなく、$K=0.8$ の軌跡は $-1$ を囲まないので閉ループは安定。

位相が $-\pi$ となる $\omega=\sqrt3$ で $|KP|=0.8/8=0.1$。従って

$$
\boxed{GM=20\log_{10}\frac1{0.1}=20\ \mathrm{dB}}.
$$

(3) 閉ループ伝達関数は $H(s)=4/[(s+1)^3+4]$。$H(j)=4/(2+2j)=1-j=\sqrt2e^{-j\pi/4}$ より

$$
\boxed{y(t)=2\sqrt2\sin(t-\pi/4)},\qquad
\boxed{(a,b,c)=(2\sqrt2,1,-\pi/4)}.
$$

### 問題3
(1) $C(s)=(s+1)(s+10)/s=10(1+s)(1+s/10)/s$。折点は $1,10$ であり、ゲインの折れ線近似は

$$
\boxed{20\log_{10}|C(j\omega)|\simeq\begin{cases}
20-20\log_{10}\omega,&\omega<1,\\20,&1\le\omega\le10,\\20\log_{10}\omega,&\omega>10.
\end{cases}}
$$

![PID 補償器のゲイン線図：厳密曲線と折れ線近似](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2011/sys_201008_control_theory_bode.svg)

(2) $C(s)=11+10/s+s$ なので P、I、D の三要素を組み合わせ、追従性、定常精度、過渡応答を調整する。I は誤差を積算し、安定な閉ループでステップ目標値・定値外乱に対する定常偏差を減らす。D は誤差の変化率に応じて作用し、位相進みと減衰を与えて過大な振動や行き過ぎを抑える。

