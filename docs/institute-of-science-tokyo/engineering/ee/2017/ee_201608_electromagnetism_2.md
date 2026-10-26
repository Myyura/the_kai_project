---
sidebar_label: "2016年8月実施 電磁気学2"
tags:
  - institute-of-science-tokyo
  - Physics.Electromagnetism.Method-of-Images
  - Physics.Electromagnetism.Surface-Current-Boundary-Condition
  - Physics.Electromagnetism.Ampere-Law
  - Physics.Electromagnetism.Magnetic-Force
---

# 東京工業大学 工学院 電気電子系 2016年8月実施 電磁気学2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図2.1は、無限に広い平らな表面をもつ透磁率 $\mu$ の磁性体と、磁性体表面から距離 $a$ だけ離れて真空中にある無限に長い直線導線を表している。この導線に直流電流 $I$ が流れている時、単位長さあたりに導線に働く力を以下の手順で求めたい。以下の問に答えよ。ただし、導線の抵抗および径は無視し、真空の透磁率は $\mu_0$ とする。

![磁性体に隣接する直線電流と影像電流（図2.1〜2.3）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2017/ee_201608_em2-original.png)

1) 2つの異なる材料が接する界面において、磁界と磁束密度に対する境界条件を、それぞれ答えのみ示せ。ただし、境界面には真電荷や電流はないものとする。

2) 電磁気学の基本法則を用いて、1) で求めた2つの境界条件をそれぞれ導出せよ。

3) 真空中の磁界は、全空間を真空としたときに電流 $I$ によって生じる磁界と、境界面に対して $I$ に対称な影像電流 $I'$ によって生じる磁界の和に等しい。図2.2において、境界面上の点 P における磁界を求めよ。ただし、$I$ と $I'$ を用いて、境界面に対する磁界の $x$ 方向成分 $H_{1x}$ と $y$ 方向成分 $H_{1y}$ に分けて表すこと。

4) 同様に、磁性体中の磁界は、全空間を磁性体としたときに、電流 $I$ の位置に影像電流 $I''$ が流れる場合に等しい。図2.3において、境界面上の点 P における磁界を求めよ。ただし、$I''$ を用いて、境界面に対する磁界の $x$ 方向成分 $H_{2x}$ と $y$ 方向成分 $H_{2y}$ に分けて表すこと。

5) 1) の境界条件をもとに、$I'$ と $I''$ を、$I$ を用いて表せ。

6) 単位長さあたりに導線に働く力を表せ。

### 题目描述

图2.1表示具有无限大平面的磁性体（磁导率为 $\mu$）以及真空中距离其表面 $a$ 的无限长直导线。导线中流有直流电流 $I$，希望按照以下步骤求导线单位长度所受的力。回答以下问题。忽略导线的电阻和直径，真空磁导率为 $\mu_0$。

1) 对两种不同材料接触的界面，分别写出磁场强度和磁通密度的边界条件，只需写答案。假设界面不存在自由电荷或电流。

2) 利用电磁学基本定律，分别推导 1) 中的两个边界条件。

3) 真空中的磁场等于将全空间视为真空时，由电流 $I$ 产生的磁场与关于界面和 $I$ 对称的镜像电流 $I'$ 产生的磁场之和。求图2.2中界面上 P 点的磁场。用 $I,I'$ 分别表示沿图示 $x$、$y$ 方向的磁场分量 $H_{1x},H_{1y}$。

4) 类似地，磁性体内的磁场等于将全空间视为磁性体、并在原电流 $I$ 所在位置通以镜像电流 $I''$ 时的磁场。求图2.3中界面上 P 点的磁场。用 $I''$ 分别表示沿图示 $x$、$y$ 方向的磁场分量 $H_{2x},H_{2y}$。

5) 根据 1) 的边界条件，用 $I$ 表示 $I',I''$。

6) 表示导线单位长度所受的力。

## **Kai**

### 1)

表面電流がないので磁界の接線成分は連続し、磁束密度の法線成分も連続する。

$$
\boxed{H_{1x}=H_{2x},\qquad \mu_0H_{1y}=\mu H_{2y}}.
$$

### 2)

界面をまたぐ薄い長方形にアンペールの法則を適用し、その高さを $0$ に近づけると

$$
\oint\boldsymbol H\cdot d\boldsymbol l=0
\quad\Longrightarrow\quad (H_{1x}-H_{2x})\Delta l=0.
$$

同様に薄い円柱に磁束保存則を適用すると

$$
\oint\boldsymbol B\cdot d\boldsymbol S=0
\quad\Longrightarrow\quad (B_{1y}-B_{2y})\Delta S=0.
$$

### 3)

$I'$ の正方向を図の紙面奥向きとする。直線電流の磁界 $H=I/(2\pi r)$ を分解して

$$
\boxed{H_{1x}=\frac{I'-I}{2\pi r}\cos\theta,
\qquad H_{1y}=-\frac{I+I'}{2\pi r}\sin\theta}.
$$

### 4)

同じ正方向を用いると

$$
\boxed{H_{2x}=-\frac{I''}{2\pi r}\cos\theta,
\qquad H_{2y}=-\frac{I''}{2\pi r}\sin\theta}.
$$

### 5)

境界条件は

$$
I-I'=I'',\qquad \mu_0(I+I')=\mu I''.
$$

これを解いて

$$
\boxed{I'=\frac{\mu-\mu_0}{\mu+\mu_0}I,
\qquad I''=\frac{2\mu_0}{\mu+\mu_0}I}.
$$

### 6)

実電流の位置で影像電流が作る磁束密度は $B_x=\mu_0I'/(4\pi a)$。実電流は $-z$ 方向なので、単位長さ当たりの力は

$$
\boxed{\boldsymbol f=-\frac{\mu_0I^2}{4\pi a}
\frac{\mu-\mu_0}{\mu+\mu_0}\,\boldsymbol e_y}.
$$

$\mu>\mu_0$ なら磁性体に引き寄せられ、$\mu<\mu_0$ なら反発し、$\mu=\mu_0$ なら力は $0$ である。
