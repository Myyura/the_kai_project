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

### I-3A

二次元平面内の質量 $m$ の質点が中心力ポテンシャル $V(r)$ 内を動く。

1. 極座標 $(r,\theta)$ でラグランジアンを書け。
2. 運動方程式を求め、運動の特徴を述べよ。

### I-3B

真空中で半径 $a$ の球面に総電荷 $Q$ が一様に分布する。球の内部も真空とし、中心を通る軸のまわりに角速度 $\omega$ で回転させる。電荷分布は変わらない。透磁率を $\mu_0$ とし SI 単位系を用いる。

1. 回転軸からの極角が $\theta$ と $\theta+d\theta$ の間にある細い円環が、中心に作る磁束密度 $d\boldsymbol B$ を求めよ。
2. 全球面が中心に作る磁束密度の大きさを求めよ。

### I-3C

実関数 $x(t)$ の方程式 $\ddot x+2\beta\dot x+\omega_0^2x=0$ を考える。$\beta,\omega_0>0$、$\beta\neq\omega_0$ とする。

1. 一般解を求めよ。
2. $x(0)=0$ の解を求め、$t>0$ の運動の特徴を述べよ。

### I-3D

1. 測定量 $u,v$ から $x=au-bv$ を求める。$a,b$ は定数であり、$u,v$ の分散が $\sigma_u^2,\sigma_v^2$ のとき、$x$ の分散を書け。
2. $^{137}\mathrm{Cs}$ の $662\,\mathrm{keV}$ ガンマ線を測る。線源を置いた10分間の計数は4900、線源を取り除いた20分間の背景計数は400であった。線源だけによる毎分の計数率とその誤差を求めよ。

#### 题目描述

A：平面中心力势 $V(r)$ 中质点的极坐标拉格朗日量、运动方程和守恒性质。

B：半径 $a$、总电荷 $Q$ 的均匀球壳以角速度 $\omega$ 转动，内外均为真空。求极角 $\theta$ 至 $\theta+d\theta$ 的薄环在中心产生的磁场，再积分求整个球壳的中心磁场。

C：求 $\ddot x+2\beta\dot x+\omega_0^2x=0$ 在 $\beta\neq\omega_0$ 时的一般解，以及 $x(0)=0$ 的解和运动特征。

D：(1) 给定 $u,v$ 的方差，求线性组合 $au-bv$ 的方差；(2) 含源10分钟计数4900、背景20分钟计数400，求扣除背景后的每分钟计数与标准误差。

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
\boxed{r=470\,\mathrm{min^{-1}},\qquad
\sigma_r=\sqrt{\frac{4900}{10^2}+\frac{400}{20^2}}=\sqrt{50}\simeq7.1\,\mathrm{min^{-1}}.}
$$

## **Reference**

- [京都大学公式原題（2020年度、PDF 6–7ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/R2.pdf)
