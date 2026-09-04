---
sidebar_label: 2016年8月実施 基礎科目 問題5 物理基礎1
tags:
  - Tohoku-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Physics.Mechanics.Radial-Small-Oscillation-Frequency
---

# 東北大学 工学研究科 電気・情報系 2016年8月実施 基礎科目 問題5 物理基礎1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

ある種の電子エネルギー分析器では，各々が円筒状扇形の形状を有する内側と外側の電極間の空間中を，電子が Fig. 5(a) のように $2$ 次元的に運動する。外側電極に対して内側電極が正にバイアスされ，この空間内を運動する電子は原点に向かう中心力を受ける。入口スリット上に収束された入射電子が適切なエネルギー $E_0$ を有する場合，入射角に関係なく，電子は出口スリットに向かって再収束される。このような運動を Fig. 5(b) の $r$–$\theta$ 極座標系で考える。$f(r)$ は原点に向かう中心力を表す。電子の位置 $(r,\theta)$ を時間の関数として記述する運動方程式は
$$
m(\ddot r-r\dot\theta^2)=-f(r),\qquad m(2\dot r\dot\theta+r\ddot\theta)=0\tag{5A}
$$
で与えられる。ここでドット（$\dot{\phantom r}$）は時間微分を示す。地点 $(r_0,0)$ での速度が $v_0$ である電子の運動に関する以下の問に答えよ。$m,\ell,v_0$ は，それぞれ，電子の質量，$mr^2\dot\theta$，$|v_0|$ を表す。$\varphi$ は $v_0$ と $\theta=\pi/2$ の直線の間の角である。

(1) $\ell$ が保存量であることを示せ。

(2) $\ell=mv_0r_0\cos\varphi$ を示せ。

(3) Eq. (5A) から，$r$ を $\theta$ の関数として記述する Eq. (5B) を導出せよ。必要であれば，関係 $dr/d\theta=\dot r/\dot\theta$ を用いよ。
$$
\frac{d^2}{d\theta^2}\left(\frac1r\right)+\frac1r=\frac{mr^2}{\ell^2}f(r)\tag{5B}
$$

(4) $v_0=\sqrt{r_0f(r_0)/m}$ で $\varphi=0$ のとき $r(\theta)=r_0$ は Eq. (5B) の解となることを示せ。

(5) このタイプの分析器の実際の動作では，$\varphi$ は必ずしもゼロではなく，$\cos\varphi\simeq1$ と $\sin\varphi\simeq\varphi$ が満たされる領域内にある小さい値をとる。従って，$v_0=\sqrt{r_0f(r_0)/m}$ であっても，$r(\theta)=r_0$ の代わりに $r(\theta)=r_0+\Delta(\theta)$ の形で Eq. (5B) の解を探す必要がある。$\varphi$ は小さいので，$r_0\gg\Delta(\theta)$ が仮定できる。この時には Eq. (5B) は Eq. (5C) で近似される。
$$
-\frac1{r_0}\frac{d^2}{d\theta^2}\left(\frac{\Delta(\theta)}{r_0}\right)-\frac{\Delta(\theta)}{r_0^2}=\frac{mr_0^2}{\ell^2}\left(2\frac{f(r_0)}{r_0}+f'(r_0)\right)\Delta(\theta)\tag{5C}
$$
ここで，$f'(r)$ は $df(r)/dr$ で与えられる。

- (a) $f(r)=\alpha/r$（$\alpha$ は正の定数）に対して Eq. (5C) は Eq. (5D) に変形されることを示せ。
$$
\frac{d^2\Delta(\theta)}{d\theta^2}=-2\Delta(\theta)\tag{5D}
$$
- (b) Eq. (5D) を解くことにより，入射電子が Fig. 5(a) に示すように出口スリットで再収束される角度 $\theta_0$ を決めよ。$v_0=\sqrt{r_0f(r_0)/m}$ 中の $r_0$ と $f(r_0)$ は分析器の動作条件から決定されるので，$mv_0^2/2$ から $E_0$ を知ることができる。

### 题目描述

质点在平面上受指向原点、大小为 $f(r)$ 的中心力，极坐标运动方程为

$$
m(\ddot r-r\dot\theta^2)=-f(r),\qquad m(2\dot r\dot\theta+r\ddot\theta)=0.
$$

初始位置为 $(r,\theta)=(r_0,0)$，速度大小为 $v_0$，其方向与正切方向的夹角为 $\varphi$。记 $\ell=mr^2\dot\theta$。

1. 证明 $\ell$ 守恒。
2. 证明 $\ell=r_0mv_0\cos\varphi$。
3. 推导轨道方程
   

$$
\frac{d^2}{d\theta^2}\left(\frac1r\right)+\frac1r=\frac{mr^2}{\ell^2}f(r).
$$

4. 当 $v_0=\sqrt{r_0f(r_0)/m}$、$\varphi=0$ 时，证明 $r(\theta)=r_0$ 为解。
5. 保持 (4) 的 $v_0$，令 $\varphi$ 很小，取 $\cos\varphi\simeq1,\sin\varphi\simeq\varphi$、$r=r_0+\Delta(\theta)$、$|\Delta|\ll r_0$。已知线性化方程为
   

$$
-\frac1{r_0}\frac{d^2}{d\theta^2}\left(\frac\Delta{r_0}\right)-\frac\Delta{r_0^2}
   =\frac{mr_0^2}{\ell^2}\left[\frac{2f(r_0)}{r_0}+f'(r_0)\right]\Delta.
$$

   (a) 对 $f(r)=a/r$（$a>0$）证明 $\Delta''=-2\Delta$；(b) 求从入口再次聚焦于 $r=r_0$ 的最小正偏转角 $\theta_0$。

## **Kai**

### (1)–(2)

$$
\dot\ell=m(2r\dot r\dot\theta+r^2\ddot\theta)=mr(2\dot r\dot\theta+r\ddot\theta)=0.
$$

初始切向速度为 $r_0\dot\theta(0)=v_0\cos\varphi$，故

$$
\boxed{\ell=mr_0v_0\cos\varphi.}
$$

### (3)

令 $u=1/r$，撇号表示对 $\theta$ 求导。由 $\dot\theta=\ell u^2/m$，

$$
\dot r=-\frac\ell m u',\qquad\ddot r=-\frac{\ell^2}{m^2}u^2u'',\qquad
r\dot\theta^2=\frac{\ell^2}{m^2}u^3.
$$

代入径向方程，得到

$$
u''+u=\frac{m}{\ell^2u^2}f(1/u),
$$

即题给轨道方程。

### (4)

$\varphi=0$ 时 $\ell^2=m^2r_0^2v_0^2=mr_0^3f(r_0)$。对常数解 $r=r_0$，轨道方程两侧均为 $1/r_0$，且初始径向速度为零，故满足初值条件。

### (5)(a)

$f(r_0)=a/r_0$、$f'(r_0)=-a/r_0^2$，并且 $\ell^2\simeq mar_0^2$。因此右侧为 $\Delta/r_0^2$，得

$$
-\frac{\Delta''+\Delta}{r_0^2}=\frac\Delta{r_0^2},\qquad\boxed{\Delta''=-2\Delta.}
$$

### (5)(b)

入口处 $\Delta(0)=0$。若把向外的入射偏角取正，则 $\dot r(0)\simeq v_0\varphi$，故 $\Delta'(0)\simeq r_0\varphi$。所以

$$
\Delta(\theta)=\frac{r_0\varphi}{\sqrt2}\sin(\sqrt2\theta).
$$

不同小入射角均在第一个正零点重新经过 $r=r_0$，因此

$$
\boxed{\theta_0=\frac\pi{\sqrt2}\simeq127.3^\circ.}
$$

![线性近似下的聚焦轨道](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_201608_kiso_5_focus.svg)
