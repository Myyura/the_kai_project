---
sidebar_label: "2016年8月実施 問1（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Control-Volume-Momentum
  - Physics.Mechanics.Angular-Momentum-Conservation-and-Areal-Velocity
---

# 九州大学 工学府 機械系専攻 2016年8月実施 流体工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、半径 $r$、中心角 $\pi/2$ の円弧に両端の平板が滑らかにつながる、一様な厚さの固定板がある。円弧の中心を O として図の $x,y$ 軸をとる。O を通り、$y$ 軸から角度 $\theta$（$0<\theta<\pi/2$）だけ傾く幅 $w_1$ の二次元噴流1が、円弧部に衝突する。その裏側の同じ位置へ、$x$ 軸の負の向きに進む幅 $w_2$ の噴流2が衝突する。

両噴流の密度は $\rho$、速さは $u$、板と噴流の奥行きはすべて $b$。流れは非圧縮性・定常であり、重力を無視できる。板の厚みと噴流幅は十分薄く、衝突後の流れは板に沿って流れ、平板の端 A、B からまっすぐに流出する。板は変形しない。（50点）

1. 噴流1の衝突後、A、B から流出する幅 $w_{A1},w_{B1}$ を求めよ。
2. 噴流1が板に及ぼす力の成分 $F_{x1},F_{y1}$ を求めよ。
3. 噴流2の衝突後、A、B から流出する幅 $w_{A2},w_{B2}$ を求めよ。
4. 噴流2が板に及ぼす力の成分 $F_{x2},F_{y2}$ を求めよ。
5. $w_1=w_2=w$ のとき、両噴流が板に及ぼす合力 $F_x,F_y$ を求めよ。

![原題の図（九州大学 2017年度 流体工学 問1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_fluids-1-original.png)

#### 题目描述

固定板由半径 $r$、圆心角 $\pi/2$ 的圆弧和两端光滑相接的平板构成。喷流1经过圆心，以相对竖轴夹角 $\theta$ 向右下方撞击圆弧，宽 $w_1$；喷流2从右侧沿 $-x$ 方向撞击背面同一处，宽 $w_2$。两者密度 $\rho$、速度大小 $u$，与板的进深均为 $b$。流动定常、不可压缩，忽略重力，板不变形，板厚和喷流宽均足够小。碰撞后水沿板从 A 向左、从 B 向上排出。分别求两股喷流的出口宽度、作用于板的力分量，并求 $w_1=w_2=w$ 时的合力。

## **Kai**

各自由噴流の圧力は大気圧で、ベルヌーイ式から各出口の速さは $u$。以下の力は流体が板に及ぼす力である。

### (1)

連続の式から $w_{A1}+w_{B1}=w_1$。衝突点で噴流1は板に垂直であり、接線方向運動量は0なので、二方向への流出量は等しい。したがって

$$
\boxed{w_{A1}=w_{B1}=\frac{w_1}{2}}.
$$

### (2)

流入速度は $u(\sin\theta,-\cos\theta)$、A、B の流出速度はそれぞれ $(-u,0),(0,u)$。流入運動量流束から流出運動量流束を引いて

$$
\boxed{F_{x1}=\rho bu^2w_1\left(\sin\theta+\frac12\right)},\qquad
\boxed{F_{y1}=-\rho bu^2w_1\left(\cos\theta+\frac12\right)}.
$$

### (3)

衝突点から A 向きの局所接線方向への入射速度成分は $u\cos\theta$。連続と接線方向運動量から

$$
w_{A2}+w_{B2}=w_2,\qquad
w_{A2}-w_{B2}=w_2\cos\theta.
$$

よって

$$
\boxed{w_{A2}=\frac{1+\cos\theta}{2}w_2},\qquad
\boxed{w_{B2}=\frac{1-\cos\theta}{2}w_2}.
$$

### (4)

流入速度は $(-u,0)$ であるから

$$
\begin{aligned}
F_{x2}&=\rho bu^2(-w_2+w_{A2})
=\boxed{-\frac{1-\cos\theta}{2}\rho bu^2w_2},\\
F_{y2}&=-\rho bu^2w_{B2}
=\boxed{-\frac{1-\cos\theta}{2}\rho bu^2w_2}.
\end{aligned}
$$

### (5)

(2)、(4)を加えると

$$
\boxed{F_x=\rho bu^2w\left(\sin\theta+\frac{\cos\theta}{2}\right)},\qquad
\boxed{F_y=-\rho bu^2w\left(1+\frac{\cos\theta}{2}\right)}.
$$
