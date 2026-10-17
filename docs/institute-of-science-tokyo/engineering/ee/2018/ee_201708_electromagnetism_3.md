---
sidebar_label: 2017年8月実施 電磁気学3
tags:
  - institute-of-science-tokyo
  - Physics.Electromagnetism.Electromagnetic-Wave
  - Physics.Electromagnetism.Gauss-Law
---
# 東京工業大学 工学院 電気電子系 2017年8月実施 電磁気学3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

電磁波に関する以下の問に答えよ。

**(A)** 以下の4つの式は、電磁界の基本方程式を微分形で書き表したものである。それぞれの説明文について、（ア）〜（キ）の中に当てはまる言葉を書け。ただし、$\boldsymbol E$ は電界、$\boldsymbol H$ は磁界、$\boldsymbol D$ は電束密度、$\boldsymbol B$ は磁束密度、$\rho$ は電荷密度、$\boldsymbol i$ は真電流密度を表すものとする。

1) $\nabla\cdot\boldsymbol D=\rho$：（ア）を中心として電界が発散することを意味する。これを電界に関する（イ）の法則と呼ぶ。

2) $\nabla\times\boldsymbol E=-\partial\boldsymbol B/\partial t$：磁界が時間的に変化すると、その回りに（ウ）が発生することを意味する。これを（エ）の法則と呼ぶ。

3) $\nabla\cdot\boldsymbol B=0$：磁束密度は発散しないので、（オ）は存在しないことを意味する。

4) $\nabla\times\boldsymbol H=\boldsymbol i+\partial\boldsymbol D/\partial t$：真電流および時間的に変化する電界と等価な（カ）電流の回りには磁界が発生することを意味する。これを拡張された（キ）の法則と呼ぶ。

**(B)** 真空中において、電界が $x$ 成分だけ、磁界が $y$ 成分だけを有し、$z$ 方向に伝搬する角周波数 $\omega$ の平面波を考える。真空の透磁率と誘電率はそれぞれ $\mu_0,\varepsilon_0$ とする。

5) 平面波における電界 $\boldsymbol E$、磁界 $\boldsymbol H$、波数 $\boldsymbol k$ の3つのベクトルの関係について、図3.1の（ク）〜（コ）に当てはまるものをそれぞれ答えよ。ただし、$\odot$ は紙面に対して上向きを表すものとする。

![図3.1 電界・磁界・波数ベクトルの関係](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2018/ee_201708_electromagnetism_3_original_fig3-1.png)

6) 上記 2)、4) の方程式から $E_x,H_y$ 以外の成分を消去することで、$E_x$ と $H_y$ の連立偏微分方程式を求めよ。真空中のため、$\boldsymbol i=0$ と置いてよい。

7) この連立偏微分方程式から $H_y$ を消去し、$E_x$ に関する波動方程式を導出せよ。

8) 7) の波動方程式の解として、$E_x(z,t)=E_0\sin(kz-\omega t)$ を考える。ここで、$E_0$ は平面波の電界振幅であり、$k$ は $z$ 方向の波数である。この解を波動方程式に代入することから $k$ を $\omega,\mu_0,\varepsilon_0$ で表せ。

9) $\sin$ 関数の引数は平面波の位相を表す。微小時間 $\Delta t$ と微小位置 $\Delta z$ が変化した後の波面（等位相面）の動きを考えることで、この平面波の速度を求めよ。

10) $H_y$ を求めよ。

#### 题目描述

回答下列有关电磁波的问题。

**(A)** 以下四式是电磁场基本方程的微分形式。在各说明中的（ア）～（キ）填入恰当词语。其中 $\boldsymbol E$ 为电场强度、$\boldsymbol H$ 为磁场强度、$\boldsymbol D$ 为电位移、$\boldsymbol B$ 为磁通密度、$\rho$ 为电荷密度、$\boldsymbol i$ 为传导电流密度。

1) $\nabla\cdot\boldsymbol D=\rho$：表示电场以（ア）为中心向外发散，称为电场的（イ）定律。

2) $\nabla\times\boldsymbol E=-\partial\boldsymbol B/\partial t$：表示磁场随时间变化时，其周围产生（ウ），称为（エ）定律。

3) $\nabla\cdot\boldsymbol B=0$：磁通密度不发散，表示不存在（オ）。

4) $\nabla\times\boldsymbol H=\boldsymbol i+\partial\boldsymbol D/\partial t$：表示传导电流以及与时变电场等效的（カ）电流周围会产生磁场，称为推广的（キ）定律。

**(B)** 考虑真空中角频率为 $\omega$、沿 $z$ 方向传播的平面波，电场只有 $x$ 分量，磁场只有 $y$ 分量。真空磁导率、介电常数分别为 $\mu_0,\varepsilon_0$。

5) 关于电场 $\boldsymbol E$、磁场 $\boldsymbol H$、波矢 $\boldsymbol k$ 三个向量的关系，分别填写图3.1中的（ク）～（コ）。其中 $\odot$ 表示垂直纸面向外。

6) 从 2)、4) 的方程中消去 $E_x,H_y$ 以外的分量，求关于 $E_x,H_y$ 的联立偏微分方程。由于处于真空，可令 $\boldsymbol i=0$。

7) 从该联立偏微分方程中消去 $H_y$，推导关于 $E_x$ 的波动方程。

8) 考虑 7) 的波动方程的解 $E_x(z,t)=E_0\sin(kz-\omega t)$，其中 $E_0$ 是平面波电场振幅，$k$ 是沿 $z$ 方向的波数。将此解代入波动方程，用 $\omega,\mu_0,\varepsilon_0$ 表示 $k$。

9) 正弦函数的自变量表示平面波的相位。通过考虑经过微小时间 $\Delta t$、发生微小位置变化 $\Delta z$ 后的波面（等相位面）运动，求该平面波的速度。

10) 求 $H_y$。

## **Kai**

### (1)～(4)

| 空欄 | 解答 |
|---|---|
| ア | 電荷 |
| イ | ガウス |
| ウ | 電界 |
| エ | ファラデー |
| オ | 磁気単極子（磁荷） |
| カ | 変位 |
| キ | アンペール |

### (5)

伝搬方向は $\mathbf E\times\mathbf H$ の向きであるから、

$$
\boxed{\text{ク}:\mathbf k,\qquad \text{ケ}:\mathbf H,\qquad \text{コ}:\mathbf E}.
$$

### (6)

$\mathbf B=\mu_0\mathbf H$、$\mathbf D=\varepsilon_0\mathbf E$ を用い、回転の $y$ 成分と $x$ 成分をそれぞれ取ると、

$$
\boxed{
\frac{\partial E_x}{\partial z}=-\mu_0\frac{\partial H_y}{\partial t},
\qquad
\frac{\partial H_y}{\partial z}=-\varepsilon_0\frac{\partial E_x}{\partial t}
}.
$$

### (7)

第 1 式を $z$ で微分し、第 2 式を代入して、

$$
\frac{\partial^2 E_x}{\partial z^2}
=-\mu_0\frac{\partial}{\partial t}\frac{\partial H_y}{\partial z}
=\mu_0\varepsilon_0\frac{\partial^2 E_x}{\partial t^2}.
$$

### (8)

$\partial_z^2E_x=-k^2E_x$、$\partial_t^2E_x=-\omega^2E_x$ より、正の $z$ 方向に伝搬する波について、

$$
\boxed{k=\omega\sqrt{\mu_0\varepsilon_0}}.
$$

### (9)

等位相面では $k\Delta z-\omega\Delta t=0$ なので、

$$
\boxed{v=\lim_{\Delta t\to0}\frac{\Delta z}{\Delta t}
=\frac{\omega}{k}=\frac{1}{\sqrt{\mu_0\varepsilon_0}}}.
$$

### (10)

第 6 問の第 2 式を積分すると、単色平面波の磁界は

$$
H_y=\frac{\varepsilon_0\omega E_0}{k}\sin(kz-\omega t)
=\boxed{E_0\sqrt{\frac{\varepsilon_0}{\mu_0}}\sin(kz-\omega t)}.
$$

ここでは電磁波に重畳する静磁界を含めていない。この式は第 6 問の両方の方程式を満たす。
