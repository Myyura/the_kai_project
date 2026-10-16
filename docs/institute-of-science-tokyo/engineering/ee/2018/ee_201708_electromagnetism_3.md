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

### (A)

以下の四つの式は、電磁界の基本方程式を微分形で書き表したものである。それぞれの説明文について、（ア）～（キ）の中に当てはまる言葉を書け。ただし、$\mathbf E$ は電界、$\mathbf H$ は磁界、$\mathbf D$ は電束密度、$\mathbf B$ は磁束密度、$\rho$ は電荷密度、$\mathbf i$ は電流密度を表すものとする。

1. $\nabla\cdot\mathbf D=\rho$：（ア）を中心として電界が発散することを意味する。これを電界に関する（イ）の法則と呼ぶ。
2. $\nabla\times\mathbf E=-\partial\mathbf B/\partial t$：磁界が時間的に変化すると、その回りに（ウ）が発生することを意味する。これを（エ）の法則と呼ぶ。
3. $\nabla\cdot\mathbf B=0$：磁束密度は発散しないので、（オ）は存在しないことを意味する。
4. $\nabla\times\mathbf H=\mathbf i+\partial\mathbf D/\partial t$：真電流および時間的に変化する電界と等価な（カ）電流の回りには磁界が発生することを意味する。これを拡張された（キ）の法則と呼ぶ。

### (B)

真空中において、電界が $x$ 成分だけ、磁界が $y$ 成分だけを有し、$z$ 方向に伝搬する角周波数 $\omega$ の平面波を考える。真空の透磁率と誘電率はそれぞれ $\mu_0,\varepsilon_0$ とする。

5. 平面波における電界 $\mathbf E$、磁界 $\mathbf H$、波数 $\mathbf k$ の三つのベクトルの関係について、図 3.1 の（ク）～（コ）に当てはまるものをそれぞれ答えよ。ただし、$\odot$ は紙面に対して上向きを表す。

![図3.1 電界・磁界・波数ベクトルの関係](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2018/ee_201708_electromagnetism_3_original_fig3-1.png)

図の出典：東京工業大学 電気電子系 2017年実施問題（原図）。

6. 上記 2)、4) の方程式から $E_x,H_y$ 以外の成分を消去することで、$E_x,H_y$ の連立偏微分方程式を求めよ。真空中のため、$\mathbf i=0$ と置いてよい。
7. この連立偏微分方程式から $H_y$ を消去し、$E_x$ に関する波動方程式を導出せよ。
8. 7) の波動方程式の解として、$E_x(z,t)=E_0\sin(kz-\omega t)$ を考える。ここで、$E_0$ は平面波の電界振幅であり、$k$ は $z$ 方向の波数である。この解を波動方程式に代入することから $k$ を $\omega,\mu_0,\varepsilon_0$ で表せ。
9. $\sin$ 関数の引数は平面波の位相を表す。微小時間 $\Delta t$ と微小位置 $\Delta z$ が変化した後の波面（等位相面）の動きを考えることで、この平面波の速度を求めよ。
10. $H_y$ を求めよ。

#### 题目描述

(A) 对四个 Maxwell 方程的物理意义填空。$\mathbf E,\mathbf H,\mathbf D,\mathbf B,\rho,\mathbf i$ 分别为电场、磁场、电位移、磁感应强度、电荷密度、电流密度。

1. $\nabla\cdot\mathbf D=\rho$ 表示电场以（ア）为源发散，称为电场的（イ）定律。
2. $\nabla\times\mathbf E=-\partial\mathbf B/\partial t$ 表示随时间变化的磁场周围产生（ウ），称为（エ）定律。
3. $\nabla\cdot\mathbf B=0$ 表示不存在（オ）。
4. $\nabla\times\mathbf H=\mathbf i+\partial\mathbf D/\partial t$ 表示传导电流以及与变化电场等效的（カ）电流周围产生磁场，称为推广的（キ）定律。

(B) 真空中的平面波以角频率 $\omega$ 沿 $z$ 方向传播，电场仅有 $x$ 分量，磁场仅有 $y$ 分量，真空磁导率和介电常数为 $\mu_0,\varepsilon_0$。

5. 将 $\mathbf E,\mathbf H,\mathbf k$ 填入原图 3.1 的（ク）～（コ）；$\odot$ 表示垂直纸面向外。
6. 由第 2、4 个方程导出 $E_x,H_y$ 的耦合偏微分方程，可取 $\mathbf i=0$。
7. 消去 $H_y$，导出 $E_x$ 的波动方程。
8. 代入 $E_x=E_0\sin(kz-\omega t)$，用 $\omega,\mu_0,\varepsilon_0$ 表示波数 $k$，其中 $E_0$ 为电场振幅。
9. 根据等相位面的微小位移 $\Delta z$ 与时间变化 $\Delta t$，求波速。
10. 求 $H_y$。

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
