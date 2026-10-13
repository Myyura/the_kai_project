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

### 問1

長さ $3l$、質量 $m$ の一様な剛体棒が、上端 $A$ まで $2l$、下端 $B$ まで $l$ の点 $O$ を支点として鉛直に立つ。$O$ の上方 $a$ の位置を、水平な2本のばね $k,2k$ で左右の壁に連結している。静止平衡では棒は鉛直である。傾き $\theta$ は十分小さく、ばね力は水平であるとし、摩擦を無視する。重力加速度は $g$。

1. $O$ まわりの慣性モーメントを求めよ。
2. $\theta$ の運動方程式を求めよ。
3. 振動するための $k$ の条件と固有角振動数を求めよ。
4. 上端 $A$ に質量 $2m$ の質点を加え、$O$ の下方 $b$ に水平な粘性減衰器 $c$ を付ける。この場合の運動方程式を求めよ。
5. この振子が減衰振動するための $c$ の条件を示せ。

### 問2

水平面上の台車1（質量 $2m$）は、ばね $2k$ で壁に接続される。その上の台車2（質量 $m$）は、ばね定数 $k$ の2本のばねで台車1の左右の壁に接続される。両台車は摩擦なく水平方向にのみ動き、ばね質量は無視する。自然長の位置からの絶対変位を $x_1,x_2$ とし、台車1に $F_0\sin\omega t$ が右向きに作用する。

1. 両台車の運動方程式を示せ。
2. $F_0=0$ として、固有角振動数 $\omega_1<\omega_2$ と固有振動モードを求め、それぞれの運動の違いを説明せよ。
3. $F_0\ne0,\ \omega\ne\omega_1,\omega_2$ とし、定常応答の振幅 $A_1,A_2$ を求めよ。

#### 题目描述

问1：均匀刚杆长 $3l$、质量 $m$，支点距上端 $2l$、下端 $l$；支点上方 $a$ 处由左右水平弹簧 $k,2k$ 支撑。小角振动且无摩擦，求惯性矩、运动方程、稳定振动条件及固有角频率。再在上端加质点 $2m$，支点下方 $b$ 处加水平黏性阻尼器 $c$，求新方程和欠阻尼条件。问2：质量 $2m$ 的车1以弹簧 $2k$ 连墙，上方质量 $m$ 的车2通过左右各一根 $k$ 弹簧连接车1；车1受 $F_0\sin\omega t$，用两车绝对位移写方程，求两阶固有频率与振型、说明相位差异，并求非共振时两车的稳态振幅。

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
\boxed{k>\frac{3mgl}{2a^2},\qquad
0<c<\frac{6l}{b^2}\sqrt{m\left(3ka^2-\frac92mgl\right)}}.
$$

上限で臨界減衰となり、それ以上では振動しない。

### 問2 (1)

2本のばねの合力は相対変位の $2k$ 倍だから

$$
\boxed{2m\ddot x_1+4kx_1-2kx_2=F_0\sin\omega t},\qquad
\boxed{m\ddot x_2-2kx_1+2kx_2=0}.
$$

### 問2 (2)

$x_j=X_j\sin\omega t$ とすると、固有値条件は

$$
\det\begin{pmatrix}4k-2m\omega^2&-2k\\-2k&2k-m\omega^2\end{pmatrix}
=2m^2\omega^4-8km\omega^2+4k^2=0.
$$

したがって

$$
\boxed{\omega_1=\sqrt{\frac{(2-\sqrt2)k}{m}},\qquad
\omega_2=\sqrt{\frac{(2+\sqrt2)k}{m}}}.
$$

振幅比 $X_2/X_1=2k/(2k-m\omega^2)$ より、モードはそれぞれ $(1,\sqrt2)^{\mathsf T}$ と $(1,-\sqrt2)^{\mathsf T}$ に比例する。低周波のモードでは同位相、高周波のモードでは逆位相で運動する。後者では台車間のばねの相対変形が大きい。

### 問2 (3)

定常解を $x_j=a_j\sin\omega t$ として動剛性行列を解くと

$$
a_1=\frac{(2k-m\omega^2)F_0}{2(m^2\omega^4-4km\omega^2+2k^2)},\qquad
 a_2=\frac{kF_0}{m^2\omega^4-4km\omega^2+2k^2}.
$$

したがって非負の振幅は $\boxed{A_1=|a_1|,A_2=|a_2|}$。$a_j$ の負号は外力との逆位相を示す。$\omega^2=2k/m$ では $a_1=0,a_2=-F_0/(2k)$ となり、台車1に反共振が生じる。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 6–7ページ](https://web.archive.org/web/20241224115014id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202008.pdf)
