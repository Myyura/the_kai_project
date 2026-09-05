---
sidebar_label: 2020年2・3月実施 基礎科目 問題2 電気回路
tags:
  - Tohoku-University
  - Electrical-Electronic.Circuits.Transmission-Line-and-Impedance-Matching
  - Electrical-Electronic.Circuits.Circuit-Transient-Response
---
# 東北大学 工学研究科 電気・情報系 2020年2・3月実施 基礎科目 問題2 電気回路

## **Author**
[蛋黄猫物理 (xhs: 94162357270)](https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7?xsec_token=YBaJbvO4qazzvNUB-8gkqSwFa4usRBcKTQe93j6tfxtPw=)

## **Description**
(1) Fig.2(a) に示す回路について以下の問に答えよ。 $E$ はフェーザ電圧である。また、分布定数線路は無損失であるとし、その分布定数線路の長さ、特性インピーダンス、位相定数をそれぞれ $l,Z_0,\beta$ である。

- (a) 端子対(2-2') での反射係数を $Z_0,Z$ を用いて表せ。

- (b) $Z = aZ_0$ のとき。端子対(1-1')から見たインピーダンス $Z_{in}$ を求めよ。ここで、$a,Z_0$ は正の実数とし、$a \neq 1$ とする。さらに、$Z_{in}$ が実数となる $l$ を求めよ。

- (c) $R_0 = 10 \Omega,Z_0 = 50 \Omega,Z = 50 \Omega$ とする。$Z$ における消費電力が $0.5$ W であるとき、$|E|$ の値を求めよ。
  
(2) Fig.2(b) に示す回路について以下の問に答えよ。電圧源 $e(t)$ は

$$
e(t) = \left \{
\begin{aligned}
&0 (t < 0) \\
&E_0 (0 \leq t < t_1) \\
&0 (t_1 \leq t)
\end{aligned}
\right.
$$

で与えられる。ここで、$E_0$ は正の実数である。$t < 0$ において回路を流れる電流を $0$ とする。

- (a) $0 \leq t < t_1$ における電圧 $v_L(t)$ を求めよ。

- (b) $t \geq t_1$ における $v_L(t)$ を求めよ。

- (c) $t_1 = 10L/R$ のとき、$0 < t <2t_1$ における $v_L(t)$ の概形を描け。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_202003_kiso_2_electrical_circuit_p1.png" width="400"/>
</figure>

### 题目描述

1. 对图 2(a) 的正弦稳态电路，电压源相量为 $E$；无损传输线长度、特性阻抗和相位常数分别为 $l,Z_0,\beta$，终端负载为 $Z$。
   1. 用 $Z_0,Z$ 表示端口 (2–2′) 的反射系数；
   2. 当 $Z=aZ_0$，其中 $a,Z_0>0$ 且 $a\ne1$，求从端口 (1–1′) 看入的输入阻抗 $Z_{\mathrm{in}}$，并求使其为实数的线长 $l$；
   3. 取 $R_0=10\,\Omega$、$Z_0=50\,\Omega$、$Z=50\,\Omega$。若负载消耗功率为 $0.5\,\mathrm W$，求 $|E|$。
2. 图 2(b) 的串联 $RL$ 电路由矩形脉冲电压驱动：
   $$
   e(t)=
   \begin{cases}
   0,&t<0,\\
   E_0,&0\le t<t_1,\\
   0,&t\ge t_1,
   \end{cases}
   $$
   且 $t<0$ 时电流为零。
   1. 求 $0\le t<t_1$ 时的电感电压 $v_L(t)$；
   2. 求 $t\ge t_1$ 时的 $v_L(t)$；
   3. 当 $t_1=10L/R$ 时，画出 $0<t<2t_1$ 内 $v_L(t)$ 的大致波形。

## **Kai**
### (1)
#### (a)

$$
\boxed{\Gamma=\frac{Z-Z_0}{Z+Z_0}}.
$$

#### (b)

$$
\boxed{Z_{\rm in}=Z_0\frac{a+j\tan(\beta l)}{1+ja\tan(\beta l)}}.
$$

当 $\tan(\beta l)$ 有限时，虚部为

$$
\operatorname{Im}Z_{\rm in}
=Z_0\frac{(1-a^2)\tan(\beta l)}{1+a^2\tan^2(\beta l)}.
$$

因 $a>0,a\ne1$，实输入阻抗出现在 $\tan(\beta l)=0$ 或其极限为无穷时，即

$$
\boxed{\beta l=\frac{k\pi}{2},\qquad l=\frac{k\pi}{2\beta}\quad(k=0,1,2,\ldots)}.
$$

偶数 $k$ 时 $Z_{\rm in}=aZ_0$，奇数 $k$ 时 $Z_{\rm in}=Z_0/a$；若要求线长严格为正，则取 $k\ge1$。

#### (c)

按有效值相量计算。负载匹配且线路无损，因此输入、输出电压的幅值相等，负载电流幅值为

$$
|I|=\sqrt{\frac{0.5}{50}}=0.1\ \mathrm A.
$$

源端为 $R_0$ 与输入阻抗 $50\,\Omega$ 串联，故

$$
\boxed{|E|=(R_0+Z_0)|I|=60\times0.1=6\ \mathrm V}.
$$

### (2)
#### (a)、(b)

令 $\tau=L/R$。由 $Li'(t)+Ri(t)=e(t)$ 和 $i(0)=0$，或用 Laplace 变换，得到

$$
V_L(s)=\frac{E_0(1-e^{-t_1s})}{s+R/L}.
$$

因此

$$
\boxed{v_L(t)=E_0e^{-t/\tau}u(t)-E_0e^{-(t-t_1)/\tau}u(t-t_1)}.
$$

按开关时刻后的值分段写为

$$
\boxed{v_L(t)=\begin{cases}
E_0e^{-t/\tau},&0\le t<t_1,\\
-E_0(1-e^{-t_1/\tau})e^{-(t-t_1)/\tau},&t\ge t_1.
\end{cases}}
$$

断电时电流连续，电感电压下降 $E_0$；之后电流衰减，电感向电阻释放储能。

#### (c)

$t_1=10\tau=10L/R$，所以 $e^{-10}\ll1$。电压从 $v_L(0^+)=E_0$ 衰减至 $v_L(t_1^-)=E_0e^{-10}\simeq0$，在 $t_1$ 跳至 $-E_0(1-e^{-10})\simeq-E_0$，再从负侧趋近零。

![RL 脉冲响应，横轴为 t/τ、纵轴为 v_L/E_0](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei/2020/ecei_202003_rl.svg)
