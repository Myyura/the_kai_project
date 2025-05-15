---
sidebar_label: "2020年8月実施 基礎科目 電気電子回路1"
tags:
  - Osaka-University
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
