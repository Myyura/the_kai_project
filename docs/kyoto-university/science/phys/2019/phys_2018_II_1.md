---
sidebar_label: "2019年度 II-1（統計力学）"
tags:
  - Kyoto-University
  - Physics.Thermodynamics.Heat-Capacity-and-Degrees-of-Freedom
  - Physics.Thermodynamics.Canonical-Partition-Function
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2019年度 問題II-1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量 $m$ の質点2個を結合した二原子分子が体積 $V$ 中に $N$ 個ある。結合長の尺度 $a$ は $(V/N)^{1/3}$ より十分小さく、分子間相互作用を無視する。ボルツマン定数は $k_B$。

1. 質点間距離を $a$ に固定した古典模型について、圧力と定積熱容量を求め、考え方を簡潔に述べよ。
2. 結合を自然長 $a$、ばね定数 $k$ のばねに置き換える。分子内ポテンシャルは $k(|\boldsymbol r_1-\boldsymbol r_2|-a)^2/2$ である。$ka^2\gg k_BT$ の古典領域で圧力と定積熱容量を求めよ。
3. (2) を量子論で扱い、質点は同種のボース粒子とする。次元解析により、$m$ と数密度 $n$ で決まる温度 $T_0$、$m,a$ で決まる $T_1$、$m,k$ で決まる $T_2$ を求めよ。$\hbar,k_B$ を使ってよい。
4. $T\ll T_0$ で現れる顕著な現象の名を書け。
5. $T_0\ll T_1\ll T_2$ のとき、(i) $T_0\ll T\ll T_1$、(ii) $T_1\ll T\ll T_2$、(iii) $T\gg T_2$ の各領域の定積熱容量を求めよ。
6. 常温 $300\,\mathrm K$ の二原子気体の熱容量が約 $5Nk_B/2$ であることから、$\omega=\sqrt{k/m}$ が十分上回るべき周波数尺度 $\omega_c$ を見積もれ。$\hbar=10^{-34}\,\mathrm{J\,s}$、$k_B=10^{-23}\,\mathrm{J/K}$ とせよ。

#### 题目描述

体积 $V$ 内有 $N$ 个由两个质量 $m$ 的质点组成的二原子分子，尺度 $a$ 远小于分子间距，忽略分子间相互作用。

1. 经典刚性键长 $a$ 模型的压强与定容热容量为何？
2. 改用势能 $k(|\boldsymbol r_1-\boldsymbol r_2|-a)^2/2$，在 $ka^2\gg k_BT$ 的经典范围求同样两量。
3. 两质点是相同玻色子，用量纲分析构造分别由 $(m,n)$、$(m,a)$、$(m,k)$ 决定的温度 $T_0,T_1,T_2$，可用 $\hbar,k_B$。
4. $T\ll T_0$ 下有什么典型现象？
5. 对 $T_0\ll T_1\ll T_2$，求三个中间温区的热容量。
6. 利用室温热容量约为 $5Nk_B/2$，估计 $\omega=\sqrt{k/m}$ 应远大于的尺度 $\omega_c$；取上述近似常数。

## **Kai**

### (1)

並進の3自由度と回転の2自由度がそれぞれ $k_BT/2$ を持つ。配置積分の体積依存性は $V^N$ であるから

$$
\boxed{P=\frac{Nk_BT}{V},\qquad C_V=\frac52Nk_B.}
$$

### (2)

伸縮振動の運動エネルギーとポテンシャルエネルギーが各 $Nk_BT/2$ を加える。$ka^2\gg k_BT$ により結合長のゆらぎが小さく、回転と伸縮を分離できる。したがって

$$
\boxed{P=\frac{Nk_BT}{V},\qquad C_V\simeq\frac72Nk_B.}
$$

### (3)・(4)

次元解析では無次元係数は決まらない。各温度の尺度は

$$
\boxed{T_0\sim\frac{\hbar^2n^{2/3}}{mk_B},\qquad
T_1\sim\frac{\hbar^2}{ma^2k_B},\qquad
T_2\sim\frac{\hbar}{k_B}\sqrt{\frac{k}{m}}.}
$$

順に並進の量子縮退、回転準位、伸縮振動のエネルギー尺度に対応する。$T\ll T_0$ では **ボース・アインシュタイン凝縮** が現れる。

### (5)

$T\gg T_0$ では並進は古典的で $3Nk_B/2$ を与える。回転・振動は、その準位間隔より $k_BT$ が小さければ凍結する。したがって

$$
\boxed{C_V\simeq
\begin{cases}
3Nk_B/2 &(T_0\ll T\ll T_1),\\
5Nk_B/2 &(T_1\ll T\ll T_2),\\
7Nk_B/2 &(T\gg T_2).
\end{cases}}
$$

最後の領域では、分子の小振幅模型が成り立つ $k_BT\ll ka^2$ も仮定する。換算質量は $m/2$ なので伸縮の実際の角振動数は $\sqrt{2k/m}$、慣性モーメントは $ma^2/2$ である。この数係数は上の温度尺度や極限の熱容量を変えない。

### (6)

室温で伸縮振動が凍結するための尺度は $\hbar\omega\gg k_BT$。よって

$$
\boxed{\omega_c\sim\frac{k_B(300\,\mathrm K)}\hbar=3\times10^{13}\,\mathrm{s^{-1}}.}
$$

## **Reference**

- [京都大学公式原題（2019年度、PDF 9ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H31.pdf)
