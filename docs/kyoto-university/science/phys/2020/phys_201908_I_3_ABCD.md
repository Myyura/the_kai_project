---
sidebar_label: "2019年8月実施 I-3-ABCD（解析力学・電磁気学・物理数学・誤差統計）"
tags:
  - Kyoto-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Electromagnetism.Biot-Savart-Law
  - Physics.Mechanics.Damped-Harmonic-Motion
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2019年8月実施 問題I-3-ABCD

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### I-3A（解析力学）

2 次元平面内で質量 $m$ の質点が中心力ポテンシャル $V$ の中を運動している。

(1) 質点の運動を記述するラグランジアン $L$ を極座標表示 $(r,\theta)$ で表せ。

(2) 小問 (1) の $L$ から質点の運動方程式を求めよ。またその式が示す運動の特徴を簡潔に述べよ。

### I-3B（電磁気学）

真空中に半径 $a$ の球面を置く。球の中も真空である。この球面に総量 $Q$ の電荷を一様に帯電させ、球面の中心 O を通る軸のまわりに角速度 $\omega$ で回転させる。ただし、回転により電荷分布は変化しないものとする。なお、真空の透磁率を $\mu_0$ とし、解答は SI 単位系を用いよ。

(1) 図 1 のように、回転軸からの角度が $\theta$ から $\theta+d\theta$ までの範囲にある微小円環（斜線で示した部分）の電荷が回転することで、中心 O に生じる磁束密度 $d\boldsymbol B$ を求めよ。

(2) 小問 (1) の結果から、球面が中心 O につくる磁束密度の大きさを求めよ。

![図1（大学公表PDFの掲載図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2020/201908-III-2B-fig1.png)

### I-3C（物理数学）

実数 $x(t)$ に対する 2 階常微分方程式

$$
\frac{d^2x}{dt^2}+2\beta\frac{dx}{dt}+\omega_0^2x=0
$$

を考える。ただし、$\beta>0$、$\omega_0>0$、$\beta\neq\omega_0$ とする。

(1) 一般解を求めよ。

(2) $x(0)=0$ として解を求め、$t>0$ に対する $x(t)$ の挙動の特徴を簡潔に述べよ。

### I-3D（誤差統計）

(1) 測定値 $u,v$ から、$x=au-bv$（$a,b$ は定数）によって $x$ を求める。測定値 $u,v$ の分散が $\sigma_u^2,\sigma_v^2$ である場合に $x$ の分散を記述せよ。

(2) $^{137}\mathrm{Cs}$ 線源から放射される $662\,\mathrm{keV}$ ガンマ線を計測した。計数率が少ないため宇宙線や環境放射能によるバックグラウンドを差し引く必要がある。計測器の前に線源を置いて 10 分間測定するとガンマ線は 4900 個であった。線源を取り除いた後、20 分間の計測ではガンマ線は 400 個計測された。この線源から放射されるガンマ線の毎分の計測数とその誤差を求めよ。

### 题目描述

**I-3A（分析力学）**

质量为 $m$ 的质点在二维平面内的中心力势 $V$ 中运动。

(1) 用极坐标 $(r,\theta)$ 表示描述质点运动的拉格朗日量 $L$。

(2) 从 (1) 的 $L$ 求质点运动方程，简要说明这些方程反映的运动特征。

**I-3B（电磁学）**

真空中有一个半径为 $a$ 的球面，球内也是真空。使总量 $Q$ 的电荷均匀分布在该球面上，并使球面绕通过球心 O 的轴以角速度 $\omega$ 旋转。假设旋转不改变电荷分布。真空磁导率为 $\mu_0$，答案使用 SI 单位制。

(1) 如图 1，求与旋转轴夹角从 $\theta$ 到 $\theta+d\theta$ 的微小圆环（图中阴影部分）上的电荷旋转时，在中心 O 产生的磁感应强度 $d\boldsymbol B$。

(2) 利用 (1) 的结果，求整个球面在中心 O 产生的磁感应强度大小。

![图1（大学公开PDF中的原图）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2020/201908-III-2B-fig1.png)

**I-3C（数学物理）**

考虑实值 $x(t)$ 满足的二阶常微分方程

$$
\frac{d^2x}{dt^2}+2\beta\frac{dx}{dt}+\omega_0^2x=0,
$$

其中 $\beta>0$、$\omega_0>0$、$\beta\neq\omega_0$。

(1) 求通解。

(2) 在 $x(0)=0$ 条件下求解，简要说明 $t>0$ 时 $x(t)$ 的变化特征。

**I-3D（误差统计）**

(1) 根据测量值 $u,v$，用 $x=au-bv$（$a,b$ 为常数）求 $x$。若 $u,v$ 的方差为 $\sigma_u^2,\sigma_v^2$，写出 $x$ 的方差。

(2) 测量 $^{137}\mathrm{Cs}$ 源发出的 $662\,\mathrm{keV}$ 伽马射线。由于计数率较低，需要扣除宇宙射线和环境放射性造成的本底。将源放在探测器前测量 10 分钟，共测得 4900 个伽马射线计数；移走源后测量 20 分钟，得到 400 个计数。求该源发出的伽马射线每分钟计数及其误差。

## **Kai**

### I-3A

(1) $\boxed{L=\frac m2(\dot r^2+r^2\dot\theta^2)-V(r)}$。

(2) オイラー・ラグランジュ方程式から

$$
\boxed{m\ddot r=mr\dot\theta^2-V'(r),\qquad
\frac d{dt}(mr^2\dot\theta)=0.}
$$

角運動量 $mr^2\dot\theta$、従って面積速度が保存する。時間に陽に依存しないため力学的エネルギーも保存する。

### I-3B

大学公表 PDF の図 1 は球状空洞内の電気双極子を描いており、本文の回転する帯電球面の条件と一致しない。以下は本文の条件に基づいて解く。

(1) 円環の電荷は $dQ=(Q/2)\sin\theta\,d\theta$、電流は $dI=\omega dQ/(2\pi)$。半径 $a\sin\theta$、中心からの軸方向距離 $a\cos\theta$ の円電流が作る磁場より

$$
\boxed{d\boldsymbol B=\frac{\mu_0Q\omega}{8\pi a}\sin^3\theta\,d\theta\,\boldsymbol e_{\rm axis}.}
$$

(2) $\int_0^\pi\sin^3\theta\,d\theta=4/3$ より

$$
\boxed{B=\frac{\mu_0|Q\omega|}{6\pi a}.}
$$

向きは正電荷の回転に対する右ねじの向きである。

### I-3C

(1) 特性根は $-\beta\pm\sqrt{\beta^2-\omega_0^2}$。$\beta>\omega_0$ なら、$\kappa=\sqrt{\beta^2-\omega_0^2}$ として

$$
x=e^{-\beta t}(Ae^{\kappa t}+Be^{-\kappa t}).
$$

$0<\beta<\omega_0$ なら、$\Omega=\sqrt{\omega_0^2-\beta^2}$ として

$$
x=e^{-\beta t}(A\cos\Omega t+B\sin\Omega t).
$$

(2) 初速度を $v_0$ とすれば

$$
\boxed{x(t)=\begin{cases}
(v_0/\kappa)e^{-\beta t}\sinh\kappa t &(\beta>\omega_0),\\
(v_0/\Omega)e^{-\beta t}\sin\Omega t &(\beta<\omega_0).
\end{cases}}
$$

前者は過減衰で、$v_0\neq0$ なら原点を再び横切らずゼロへ戻る。後者は周期 $2\pi/\Omega$、包絡線 $e^{-\beta t}$ の減衰振動である。

### I-3D

(1) 一般には共分散も必要であり、厳密に

$$
\boxed{\sigma_x^2=a^2\sigma_u^2+b^2\sigma_v^2-2ab\operatorname{Cov}(u,v).}
$$

二つの測定が独立、または無相関なら最後の項がゼロとなる。分散二つだけでは、相関がある場合の数値は決まらない。

(2) 二回の独立なポアソン計数を $N_s,N_b$ とすると、正味の計数率は $r=N_s/10-N_b/20$。従って

$$
\boxed{\begin{aligned}
r&=470\,\mathrm{min^{-1}},\\
\sigma_r&=\sqrt{\frac{4900}{10^2}+\frac{400}{20^2}}\\
&=\sqrt{50}\simeq7.1\,\mathrm{min^{-1}}.
\end{aligned}}
$$

## **Reference**

- [京都大学公式原題（2020年度、PDF 6–7ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/R2.pdf)
