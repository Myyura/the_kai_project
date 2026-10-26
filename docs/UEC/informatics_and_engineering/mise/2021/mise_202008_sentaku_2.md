---
sidebar_label: "2020年8月実施 選択問題2 機械力学"
tags:
  - University-of-Electro-Communications
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
  - Physics.Mechanics.Damped-Harmonic-Motion
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Mechanics.Forced-Vibration
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2020年8月実施 選択問題2 機械力学

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

以下の問1，問2に答えよ。

### 問1

図1に示すように，長さ $3l$，質量 $m$ の断面一様な剛体棒が，上の端点 $A$ までの長さが $2l$，下の端点 $B$ までの長さが $l$ となる点 $O$ を支点にして回転するように取り付けられた倒立振子を考える。点 $O$ から垂直上方向に距離 $a$ の位置にばね定数 $k,2k$ のばねが，剛体棒が鉛直のときに剛体棒に対して直角になるように左右の壁に取り付けられている。壁は静止平衡状態で剛体棒が鉛直となるように置かれている。剛体棒の傾き角 $\theta$ は十分に小さいとしてよく，ばねの力は常に水平方向に働くものとする。重力加速度を $g$ とし，摩擦は無視できるとする。以下の問いに答えよ。

(1) $O$ 点まわりの剛体棒の慣性モーメントを求めよ。

(2) 傾き角 $\theta$ に関する運動方程式を求めよ。

(3) 振子が振動するための $k$ の条件と，その時の固有角振動数を求めよ。

![図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_sentaku_2_fig1.png)

次に，図1の倒立振子に，質量 $2m$ の質点を剛体棒の上の端点 $A$ に取り付け，さらに粘性減衰係数 $c$ の減衰器を，図2のように点 $O$ から垂直下方向に距離 $b$ の位置に，剛体棒が鉛直のときに剛体棒に対して直角になるように取り付けた場合を考える。以下の問いに答えよ。

(4) 傾き角 $\theta$ に関する運動方程式を求めよ。

(5) 振子が減衰振動するための $c$ の条件を示せ。

![図2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_sentaku_2_fig2.png)

### 問2

図3に示すような，2つの台車および3つのばねからなる振動系を考える。質量 $2m$ の台車1は水平面上に置かれ，ばね定数 $2k$ のばねで壁と連結されている。質量 $m$ の台車2は台車1の上に置かれ，ばね定数 $k$ の2つのばねで台車1と連結されている。台車1には調和外力 $F_0\sin\omega t$ が水平方向に入力される。2つの台車は摩擦なく水平方向にのみ移動する。ばねの質量は無視できるものとする。以下の問いに答えよ。

(1) 図3に示すばねが自然長のときの位置 $O$ からの台車1，2の絶対変位 $x_1,x_2$ を用いて，それぞれの台車の運動方程式を示せ。

(2) 調和外力がない（$F_0=0$）として，この系の固有角振動数 $\omega_1,\omega_2$（$\omega_1<\omega_2$ とする）と各固有振動数に対応する固有振動モードを求めよ。また，各固有角振動数によって生じる振動運動にはどのような違いがあるか，台車1と台車2の運動の関係に基づいて答えよ。

(3) $F_0\ne0$ かつ $\omega\ne\omega_1$ かつ $\omega\ne\omega_2$ であるとして，台車1，2の定常応答の振幅 $A_1,A_2$ を求めよ。

![図3](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_sentaku_2_fig3.png)

### 题目描述

回答下列第1题和第2题。

#### 第1题

如图1，考虑一倒立摆：长度为 $3l$、质量为 $m$ 的等截面刚杆安装为可绕支点 $O$ 转动，$O$ 至上端点 $A$ 的长度为 $2l$，至下端点 $B$ 的长度为 $l$。在 $O$ 点竖直上方距离 $a$ 处，将弹簧常数为 $k,2k$ 的弹簧连接到左右两侧墙壁，使刚杆竖直时弹簧与刚杆垂直。墙的位置使刚杆在静止平衡状态下保持竖直。可认为刚杆倾角 $\theta$ 足够小，弹簧力始终沿水平方向作用。重力加速度为 $g$，忽略摩擦。回答下列问题。

(1) 求刚杆绕 $O$ 点的转动惯量。

(2) 求倾角 $\theta$ 的运动方程。

(3) 求摆能够振动时 $k$ 应满足的条件，以及此时的固有角频率。

接着，在图1的倒立摆上端点 $A$ 处安装质量为 $2m$ 的质点，并如图2，在 $O$ 点竖直下方距离 $b$ 处安装黏性阻尼系数为 $c$ 的阻尼器，使刚杆竖直时阻尼器与其垂直。回答下列问题。

(4) 求倾角 $\theta$ 的运动方程。

(5) 给出摆能够作衰减振动时 $c$ 应满足的条件。

#### 第2题

考虑图3所示由两辆小车和三个弹簧组成的振动系统。质量为 $2m$ 的小车1置于水平面上，通过弹簧常数为 $2k$ 的弹簧与墙壁连接。质量为 $m$ 的小车2置于小车1上，通过两个弹簧常数均为 $k$ 的弹簧与小车1连接。小车1受到水平方向的简谐外力 $F_0\sin\omega t$。两辆小车均无摩擦且只能沿水平方向运动，弹簧质量可忽略。回答下列问题。

(1) 以图3中弹簧处于自然长度时的位置 $O$ 为基准，用小车1、2的绝对位移 $x_1,x_2$ 写出各小车的运动方程。

(2) 在没有简谐外力（$F_0=0$）时，求系统的固有角频率 $\omega_1,\omega_2$（$\omega_1<\omega_2$）及各固有频率对应的振型。再根据小车1与小车2的运动关系，说明各固有角频率下的振动有何不同。

(3) 设 $F_0\ne0$、$\omega\ne\omega_1$ 且 $\omega\ne\omega_2$，求小车1、2稳态响应的振幅 $A_1,A_2$。

## **Kai**

### 問1 (1)–(3)

棒の重心は $O$ の上方 $l/2$ なので、平行軸の定理より

$$
\boxed{I_O=\frac1{12}m(3l)^2+m\left(\frac l2\right)^2=ml^2}.
$$

ばねの復元モーメントは $3ka^2\theta$、重力の転倒モーメントは $mgl\theta/2$。したがって

$$
\boxed{ml^2\ddot\theta+\left(3ka^2-\frac{mgl}{2}\right)\theta=0}.
$$

復元係数が正となる条件と固有角振動数は

$$
\boxed{k>\frac{mgl}{6a^2}},\qquad
\boxed{\omega_n=\sqrt{\frac{3ka^2-mgl/2}{ml^2}}}.
$$

### 問1 (4), (5)

質点の慣性モーメントは $2m(2l)^2=8ml^2$、転倒モーメントの係数は $2mg(2l)=4mgl$。減衰モーメントは $cb^2\dot\theta$ である。よって

$$
\boxed{9ml^2\ddot\theta+cb^2\dot\theta+
\left(3ka^2-\frac92mgl\right)\theta=0}.
$$

正の減衰を持つ複素特性根となる条件は

$$
\boxed{\begin{gathered}
k>\frac{3mgl}{2a^2},\\
0<c<\frac{6l}{b^2}\sqrt{m\left(3ka^2-\frac92mgl\right)}
\end{gathered}}.
$$

上限で臨界減衰となり、それ以上では振動しない。

### 問2 (1)

2本のばねの合力は相対変位の $2k$ 倍だから

$$
\begin{gathered}
\boxed{2m\ddot x_1+4kx_1-2kx_2=F_0\sin\omega t},\\
\boxed{m\ddot x_2-2kx_1+2kx_2=0}.
\end{gathered}
$$

### 問2 (2)

$x_j=X_j\sin\omega t$ とすると、固有値条件は

$$
\begin{gathered}
\det\begin{pmatrix}4k-2m\omega^2&-2k\\-2k&2k-m\omega^2\end{pmatrix}
=2m^2\omega^4-8km\omega^2+4k^2\\
=0.
\end{gathered}
$$

したがって

$$
\boxed{\begin{gathered}
\omega_1=\sqrt{\frac{(2-\sqrt2)k}{m}},\\
\omega_2=\sqrt{\frac{(2+\sqrt2)k}{m}}
\end{gathered}}.
$$

振幅比 $X_2/X_1=2k/(2k-m\omega^2)$ より、モードはそれぞれ $(1,\sqrt2)^{\mathsf T}$ と $(1,-\sqrt2)^{\mathsf T}$ に比例する。低周波のモードでは同位相、高周波のモードでは逆位相で運動する。後者では台車間のばねの相対変形が大きい。

### 問2 (3)

定常解を $x_j=a_j\sin\omega t$ として動剛性行列を解くと

$$
\begin{gathered}
a_1=\frac{(2k-m\omega^2)F_0}{2(m^2\omega^4-4km\omega^2+2k^2)},\\
a_2=\frac{kF_0}{m^2\omega^4-4km\omega^2+2k^2}.
\end{gathered}
$$

したがって非負の振幅は $\boxed{A_1=|a_1|,A_2=|a_2|}$。$a_j$ の負号は外力との逆位相を示す。$\omega^2=2k/m$ では $a_1=0,a_2=-F_0/(2k)$ となり、台車1に反共振が生じる。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 6–7ページ](https://web.archive.org/web/20241224115014id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202008.pdf)
