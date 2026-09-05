---
sidebar_label: "2024年8月実施 専門科目 第2問"
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Initial-Value-Problem
---

# 東京大学 学際情報学府 学際情報学専攻 総合分析情報学コース 2024年8月実施 専門科目 第2問

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 題意の要約


超高層ビルの上から質量 $m$ の物体を水平方向に初速 $v_0$ で投げる。$x$ 軸を水平右向き、$y$ 軸を鉛直下向きとし、速度に比例する空気抵抗 $-k\boldsymbol v$ を受けるものとする。運動方程式は

$$
m\frac{dv_x}{dt}=-kv_x,\qquad
m\frac{dv_y}{dt}=mg-kv_y
$$

である。初期条件 $v_x(0)=v_0$, $v_y(0)=0$, $x(0)=0$ の下で、$v_x(t)$、$x(t)$ を求め、$v_y(t)$ の時間変化を示せ。

### 题目描述

从高楼顶部将质量为 $m$ 的物体以初速度 $v_0$ 水平抛出。取水平向右为 $x$ 轴正向、竖直向下为 $y$ 轴正向，空气阻力为 $-k\boldsymbol v$。在

$$
m\frac{dv_x}{dt}=-kv_x,\qquad
m\frac{dv_y}{dt}=mg-kv_y
$$

及初始条件 $v_x(0)=v_0$、$v_y(0)=0$、$x(0)=0$ 下，求水平速度、水平位移，并说明竖直速度随时间的变化。

## **Kai**

### (1)

$$
\frac{dv_x}{v_x}=-\frac{k}{m}\,dt.
$$

$v_x(0)=v_0$ より、

$$
\boxed{v_x(t)=v_0e^{-kt/m}}.
$$

### (2)

$$
\begin{aligned}
x(t)
&=\int_0^t v_0e^{-ks/m}\,ds\\
&=\boxed{\frac{mv_0}{k}\left(1-e^{-kt/m}\right)}.
\end{aligned}
$$

### (3)

$$
\frac{dv_y}{dt}+\frac{k}{m}v_y=g.
$$

$v_y(0)=0$ より、

$$
\boxed{v_y(t)=\frac{mg}{k}\left(1-e^{-kt/m}\right)}.
$$

したがって $v_y(t)$ は $0$ から単調に増加し、

$$
\lim_{t\to\infty}v_y(t)=\frac{mg}{k}
$$

となる。

## **Reference**

- [東京大学大学院 情報学環・学際情報学府 修士課程 過去の入学試験問題](https://www.iii.u-tokyo.ac.jp/admissions/master-pastexams)
- [2025年度 専門科目（総合分析情報学コース）公式問題 PDF](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2025/03/2025bunseki.pdf)
