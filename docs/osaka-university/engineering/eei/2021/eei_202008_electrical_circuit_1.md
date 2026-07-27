---
sidebar_label: 2020年8月実施 基礎科目 電気電子回路1
tags:
  - Osaka-University
  - Electrical-Electronic.Circuits.Circuit-Transient-Response
  - Electrical-Electronic.Circuits.Resistor-Capacitor-Charging-and-Discharging
  - Mathematics.Differential-Equations.Laplace-Transform
---
# 大阪大学 工学研究科 電気電子情報工学専攻 2020年8月実施 基礎科目 電気電子回路1

## **Author**
[蛋黄猫物理 (xhs: 94162357270)](https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7?xsec_token=YBaJbvO4qazzvNUB-8gkqSwFa4usRBcKTQe93j6tfxtPw=)

## **Description**
図１の回路において，$t < 0$（$t$ は時刻を表す）でスイッチ SW1 は閉じており，スイッチ SW2 は開いている．
このとき，回路は定常状態にあるとする．
つぎに，$t = 0$ で SW1 を開き，SW2 を閉じる．
以下の問いに答えよ．ただし，図のように，電圧 $v_1(t), v_2(t)$, 電流 $i(t)$ を定義し，$v_2(0^-) = 0$ とする．
また，$R_1, R_2, C_1, C_2,E$ はすべて正の実定数とする．

(1) $t = 0$ の直前 $(t = 0^-)$ での，電流 $i(t)$ と電圧 $v_1(t)$ を求めよ．

(2) $t = 0$ の直後 $(t = 0^+)$ での，電流 $i(t)$ と電圧 $v_1(t)$ を求めよ．

(3) $t > 0$ における電流 $i(t)$ のラプラス変換 $I(s)$ を求めよ．

(4) $R_1 = 3\Omega, R_2 = 2\Omega, C_1 = C_2 = 1 F, E = 15 V$ として，電流 $i(t)\ (t > 0)$ を求めよ．

(5) 問い (4) のパラメータを用いて，$t > 0$ における，$R_1$ の抵抗値を持つ抵抗器で消費される全エネルギーを求めよ． 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka_university/engineering/eei_202008_electrical_circuit_1_p1.png" width="600" alt=""/>
</figure>

### 题目描述

图 1 的电路在 $t<0$ 时开关 SW1 闭合、SW2 断开，并已达到稳态。$t=0$ 时切换为 SW1 断开、SW2 闭合。电压、电流方向按图定义，且 $v_2(0^-)=0$；$R_1,R_2,C_1,C_2,E$ 均为正实常数。

1. 求切换前瞬间 $t=0^-$ 的 $i(t)$ 与 $v_1(t)$。
2. 利用电容电压连续性，求切换后瞬间 $t=0^+$ 的 $i(t)$ 与 $v_1(t)$。
3. 求 $t>0$ 时电流 $i(t)$ 的 Laplace 变换 $I(s)$。
4. 当
   $$R_1=3\,\Omega,\quad R_2=2\,\Omega,\quad C_1=C_2=1\,\mathrm F,\quad E=15\,\mathrm V$$
   时，求 $t>0$ 的 $i(t)$。
5. 使用第 4 问参数，求 $t>0$ 内阻值为 $R_1$ 的电阻消耗的总能量。

#### 考点

- **开关电路初始条件**：分析直流稳态并使用电容电压不能突变。
- **RC 网络的 Laplace 域分析**：用 $1/(sC)$ 表示电容并求等效阻抗。
- **部分分式与反变换**：把电流写成多个指数衰减项。
- **电阻耗能**：计算 $\int_0^\infty R_1i^2(t)\,dt$。

## **Kai**
### (1)

$$
i(0^-) = \frac{E}{R_1 + R_2}
$$

$$
v_1(0^-) = E
$$

### (2)

$$
i(0^+) = \frac{E}{R_1}
$$

$$
v_1(0^+) = v_1(0^-) = E
$$

### (3)

$$
I(s) = \frac{E/s}{\frac{1}{sC_1} + R_1 + \frac{R_2 / sC_2}{R_2 + 1/(sC_2)}}
$$

### (4)

$$
\begin{aligned}
    I(s) &= \frac{15/s}{\frac{1}{s} + 3 + \frac{2/s}{2 + 1/s}} \\
    &= \frac{15}{1+3s+s\frac{2}{2s+1}} \\
    &= \frac{15(2s+1)}{(3s+1)(2s+1) + 2s} \\
    &= \frac{30s+15}{6s^2+7s+1} \\
    &= \frac{30s + 15}{(6s+1)(s+1)} \\
    &= \frac{5s+2.5}{(s+\frac{1}{6})(s+1)} \\
    &= \frac{2}{s+\frac{1}{6}} + \frac{3}{s+1}
\end{aligned}
$$

よって、

$$
i(t) = (2e^{-\frac{1}{6}} + 3e^{-t})u(t)
$$

### (5)

$$
\begin{aligned}
    W &= \int_0^{+\infty} i^2(t) R_1 dt = 3\int_0^{+\infty} (4e^{-\frac{1}{3}t} + 9e^{-2t} + 12e^{-\frac{7}{6}t}) dt \\
    &= 3 \cdot (12 + \frac{9}{2} + \frac{72}{7}) = \frac{1125}{14}
\end{aligned}
$$
