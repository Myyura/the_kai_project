---
sidebar_label: 2014年2月実施 プログラミング
tags:
  - Tokyo-University
  - Computer-Science.Programming.Fibonacci-Numbers
  - Computer-Science.Programming.Recursion
  - Computer-Science.Programming.Integer-Overflow
  - Computer-Science.Programming.Arbitrary-Precision-Arithmetic
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2014年2月実施 プログラミング

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[Official examination, archived Japanese PDF](https://web.archive.org/web/20151118065623id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2014-2-program.pdf), pages 4–5.
Use 64bit (or less) integer arithmetic when writing the following programs.

(1) Write a program that computes $f(10)$ where $f$ is a function defined as follows:

$$
f(x) = \begin{cases}
1 & \text{if } \quad x \le 2, \\
f(x-1) + f(x-2) & \text{otherwise},
\end{cases}
$$

where $x$ is a positive integer.

(2) Write a program that computes $f(50)$ within 10 seconds. Note that the result of $f(50)$ is not a 32bit integer. In some languages, you would have to use 64bit-integer type such as long in Java.

(3) Write a program that takes two character strings representing a positive 32-digit decimal integer and print the sum of the two integers. Test the program by giving the following inputs:

```
00123456789012345678901234567890
00987654321098765432109876543210
```

(4) Write a program that computes $f(140)$ within 10 seconds. The result can be represented by a 32-digit decimal number.

(5) Consider the following notation to represent a 32-digit decimal floating-point number:

```
12345678901234567890123456789012 02
```

It consists of 32 digits and 2 digits separated by a white space. The number above represents $1.2345678901234567890123456789012 \times 10^2$.
Write a program that takes two character strings representing a positive 32-digit decimal floating-point number and print the multiplication of the two numbers. Test the program by giving the following inputs:

```
12345678901234567890123456789012 04
98765432109876543210987654321098 09
```

(6) Write a program that computes the value of $\phi$ defined as follows:

$$
\phi = \frac{1 + \sqrt{5}}{2} \quad .
$$

Use a 32-digit decimal floating-point number to compute the value.

(7) Write a program that computes the value of $g(140)$ where:

$$
g(x) = \frac{\phi^x}{\sqrt{5}} \quad .
$$

Use a 32-digit decimal floating-point number to compute the value.

(8) Write a program that computes the maximum value of $|f(x) - g(x)|$, where $x$ is an integer such that $1 \le x \le 140$. Use a 32-digit decimal floating-point number for computing the number.

### 题目描述

编写所有程序时，只使用不超过 64 位的整数运算。高精度数须用数字数组或多个机器字表示；高精度表示并不解除单次整数运算的位宽限制。

1. 对正整数 $x$，定义

   $$
   f(x)=
   \begin{cases}
   1,&x\le2,\\
   f(x-1)+f(x-2),&x>2.
   \end{cases}
   $$

   编写程序计算 $f(10)$。
2. 编写在 10 秒内计算 $f(50)$ 的程序。结果超出 32 位整数；某些语言须使用 64 位整数类型，例如 Java 的 `long`。
3. 编写程序，读入两个表示正的 32 位十进制数（这里指 32 个十进制数字）的字符串并输出其和。用以下输入测试：

   ```text
   00123456789012345678901234567890
   00987654321098765432109876543210
   ```

4. 编写在 10 秒内计算 $f(140)$ 的程序，其结果可用 32 个十进制数字表示。
5. 用“32 个有效数字 + 空格 + 2 位指数”表示 32 位十进制浮点数，例如

   ```text
   12345678901234567890123456789012 02
   ```

   表示 $1.2345678901234567890123456789012\times10^2$。编写程序，读入两个表示正的 32 位十进制浮点数的字符串并输出其乘积；用以下输入测试：

   ```text
   12345678901234567890123456789012 04
   98765432109876543210987654321098 09
   ```

6. 定义

   $$
   \phi=\frac{1+\sqrt5}{2}.
   $$

   用 32 位十进制浮点数计算 $\phi$。
7. 定义

   $$
   g(x)=\frac{\phi^x}{\sqrt5}.
   $$

   用 32 位十进制浮点数计算 $g(140)$。
8. 对整数 $1\le x\le140$，用 32 位十进制浮点数计算

   $$
   \max |f(x)-g(x)|.
   $$


## **Kai**

The restriction concerns the integer arithmetic used to implement the programs. Thus a 32-decimal-digit value can be held in a digit array, while every addition, multiplication and carry operation acts on small integers. Directly parsing a whole 32-digit integer into a built-in arbitrary-precision integer would bypass this requirement.

For parts (5)–(8), the implementation below uses **32 significant decimal digits, rounded to nearest with ties to even after each floating-point operation**. Exponentiation uses repeated squaring. The last digits and the finite-precision error in (8) use this convention. Intermediate digit arrays may be longer than 32 digits so that the next 32-digit result can be rounded correctly; their individual entries and arithmetic remain small integers.

### (1) and (2) Fibonacci recurrence

Maintain consecutive values $(a,b)=(f(k),f(k+1))$, starting from $(0,1)$, and update $(a,b)\leftarrow(b,a+b)$. After $n$ updates, $a=f(n)$. This takes $O(n)$ additions instead of the exponential number of calls in naive repeated recursion.

$$
\boxed{f(10)=55,\qquad f(50)=12586269025.}
$$

All intermediate values for these two calls fit a signed 64-bit integer, while $f(50)$ exceeds a 32-bit integer. The code's scalar `fibonacci64` function is used only for these two requested inputs.

### (3) Addition of decimal strings

Read each character as a single digit. Add from right to left with a carry, where each temporary sum is at most $9+9+1=19$. Store a final carry if present, since two 32-digit inputs can produce a 33-digit result. Remove leading zeroes only when formatting the numerical answer. The supplied inputs give

```text
1111111110111111111011111111100
```

No whole-input conversion to an integer is needed.

### (4) Large Fibonacci number

Use the same recurrence as in (1), replacing machine-integer addition with the digit-array addition from (3). This gives

$$
\boxed{f(140)=81055900096023504197206408605.}
$$

The result is exact and fits within 32 decimal digits. There are only 140 additions of short digit arrays, so the program easily meets the 10-second requirement.

### (5) Decimal floating-point multiplication

Represent a nonzero value by a 32-digit integer mantissa $M$ stored as digits and an exponent $E$, with value $M\,10^{E-31}$. Multiply the two mantissas using schoolbook digit multiplication, giving at most 64 digits. The unnormalized scale is $10^{E_1+E_2-62}$. Normalize the result and round to 32 significant digits, increasing the exponent if rounding produces an extra leading digit.

For the specified pair, the rounded output is

```text
12193263113702179522618503273386 14
```

The digit multiplication's raw column sums are at most $32\cdot81=2592$ before carry propagation. Thus even 32-bit scalar integers are sufficient for this multiplication, although the complete number is much longer.

### (6) Computing $\phi$

Compute $\sqrt5$ by Newton iteration

$$
x_{k+1}=\frac12\left(x_k+\frac5{x_k}\right),\qquad x_0=2,
$$

rounding each division and addition to the stated precision. Stop when the stored value stops changing; the code also detects a possible rounding cycle. Then calculate $(1+\sqrt5)/2$ with the same operations. For this input Newton iteration settles at

```text
sqrt(5): 22360679774997896964091736687313 00
phi:     16180339887498948482045868343656 00
```

Division uses decimal long division and extra quotient digits. Its remainder supplies a sticky bit, so a discarded tail that begins with 5 is correctly distinguished from an exact halfway case.

### (7) Computing $g(140)$

Use repeated squaring for $\phi^{140}$, rounding each multiplication to 32 significant digits, and then divide by the stored $\sqrt5$. Under the specified convention the result is

```text
81055900096023504197206408604717 28
```

That is $81055900096023504197206408604.717$. This differs from the exact Fibonacci number by 0.283 because of accumulated finite-precision error, not because Binet's formula predicts an error of that size.

### (8) Maximum computed error

For each $x=1,\ldots,140$, compute $f(x)$ exactly using digit arrays, convert it exactly to the 32-digit floating-point representation, compute $g(x)$ by the same repeated-squaring routine as in (7), and form the absolute difference by aligned digit subtraction. Compare the results without converting them to ordinary machine floating point.

For this implementation the largest computed error is

$$
\boxed{0.283\quad\text{at }x=140.}
$$

For comparison, in exact real arithmetic Binet's formula gives

$$
f(x)=\frac{\phi^x-\psi^x}{\sqrt5},\qquad
\psi=\frac{1-\sqrt5}{2}=-\phi^{-1},
$$

so

$$
|f(x)-g(x)|=\frac{\phi^{-x}}{\sqrt5}.
$$

This strictly decreases with $x$; its mathematical maximum is

$$
\frac1{\phi\sqrt5}=\frac{5-\sqrt5}{10}
\approx0.276393202250021030359082633126872\quad(x=1).
$$

That exact-arithmetic result is a useful check, but it is not the maximum obtained by evaluating the large powers with the required finite precision. Different explicitly chosen rounding/evaluation rules can give different numerical maxima in (8).

### Complete program

Save as `fibonacci32.py` and run it without arguments to reproduce all eight outputs. Part (3) also accepts `--add A B`, where both arguments contain 32 digits. Part (5) accepts `--multiply "M1 E1" "M2 E2"`. Input exponents and loop counters are small machine integers; no scalar integer represents an entire long mantissa. Signed exponents are supported internally for values below one; the required multiplication test still uses the specified two-digit nonnegative exponent format.

```python
# All scalar arithmetic uses small integers; long values are decimal digit lists.
PREC = 32


def strip(a):
    i = 0
    while i+1 < len(a) and a[i] == 0:
        i += 1
    return a[i:]


def digits(text):
    if not text or any(c < '0' or c > '9' for c in text):
        raise ValueError('unsigned decimal digits required')
    return strip([ord(c)-ord('0') for c in text])


def show(a):
    return ''.join(chr(48+x) for x in a)


def compare(a, b):
    a, b = strip(a), strip(b)
    return ((len(a), a) > (len(b), b)) - ((len(a), a) < (len(b), b))


def add_int(a, b):
    a, b = a[::-1], b[::-1]
    out, carry = [], 0
    for i in range(max(len(a), len(b))):
        total = carry + (a[i] if i < len(a) else 0) + (b[i] if i < len(b) else 0)
        out.append(total % 10)
        carry = total // 10
    if carry:
        out.append(carry)
    return strip(out[::-1])


def sub_int(a, b):
    assert compare(a, b) >= 0
    a, b = a[::-1], b[::-1]
    out, borrow = [], 0
    for i in range(len(a)):
        value = a[i] - borrow - (b[i] if i < len(b) else 0)
        borrow = int(value < 0)
        out.append(value + 10*borrow)
    assert borrow == 0
    return strip(out[::-1])


def mul_int(a, b):
    a, b = a[::-1], b[::-1]
    out = [0]*(len(a)+len(b))
    for i, x in enumerate(a):
        for j, y in enumerate(b):
            out[i+j] += x*y
    for i in range(len(out)-1):
        out[i+1] += out[i]//10
        out[i] %= 10
    return strip(out[::-1])


def divmod_int(a, b):
    if strip(b) == [0]:
        raise ZeroDivisionError
    quotient, remainder = [], [0]
    for x in a:
        remainder = strip(remainder+[x])
        q = 0
        # Prior remainder < b, so each quotient digit needs at most9 subtractions.
        while compare(remainder, b) >= 0:
            remainder = sub_int(remainder, b)
            q += 1
        quotient.append(q)
    return strip(quotient), remainder


def rounded(a, scale=0, sticky=False):
    """Return32digit mantissa/exponent for integer(a)*10**scale, ties to even."""
    a = strip(a)
    if a == [0]:
        return ([0]*PREC, 0)
    exponent = len(a)-1+scale
    if len(a) > PREC:
        tail = a[PREC:]
        keep = a[:PREC]
        up = tail[0] > 5 or (tail[0] == 5 and
             (any(tail[1:]) or sticky or keep[-1] % 2 == 1))
        if up:
            keep = add_int(keep, [1])
            if len(keep) > PREC:
                exponent += 1
                keep = keep[:PREC]
        a = keep
    else:
        a = a + [0]*(PREC-len(a))
    return (a, exponent)


def from_text(text):
    fields = text.split()
    if len(fields) == 1:
        return rounded(digits(fields[0]))
    mantissa, exponent = fields
    if len(mantissa) != PREC:
        raise ValueError('mantissa must contain32digits')
    return rounded(digits(mantissa), int(exponent)-(PREC-1))


def formatted(x):
    mantissa, exponent = x
    # Signed exponents are supported for intermediate results below1.
    return show(mantissa)+' '+(f'{exponent:02d}' if exponent >= 0 else f'-{-exponent:02d}')


def aligned(x, y):
    a, ea = x
    b, eb = y
    exponent = min(ea, eb)
    return a+[0]*(ea-exponent), b+[0]*(eb-exponent), exponent-(PREC-1)


def fp_add(x, y):
    a, b, scale = aligned(x, y)
    return rounded(add_int(a, b), scale)


def fp_absdiff(x, y):
    a, b, scale = aligned(x, y)
    return rounded(sub_int(a, b) if compare(a, b) >= 0 else sub_int(b, a), scale)


def fp_mul(x, y):
    a, ea = x
    b, eb = y
    return rounded(mul_int(a, b), ea+eb-2*(PREC-1))


def fp_div(x, y):
    a, ea = x
    b, eb = y
    extra = PREC+2
    q, r = divmod_int(a+[0]*extra, b)
    return rounded(q, ea-eb-extra, sticky=(r != [0]))


def fp_compare(x, y):
    a, b, _ = aligned(x, y)
    return compare(a, b)


def fp_sqrt5():
    five, two = from_text('5'), from_text('2')
    current = two
    seen = []
    for _ in range(100):
        nxt = fp_div(fp_add(current, fp_div(five, current)), two)
        if nxt == current:
            return nxt
        if nxt in seen:
            raise ArithmeticError('rounding cycle in Newton iteration')
        seen.append(current)
        current = nxt
    raise ArithmeticError('Newton iteration did not settle')


def fp_power(x, n):
    result = from_text('1')
    while n:
        if n & 1:
            result = fp_mul(result, x)
        n //= 2
        if n:
            x = fp_mul(x, x)
    return result


def fibonacci_digits(n):
    a, b = [0], [1]
    for _ in range(n):
        a, b = b, add_int(a, b)
    return a


def fibonacci64(n):
    # For the requested n=10,50 all stored values fit a signed64bit integer.
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a+b
    return a


def all_results():
    print('(1)', fibonacci64(10))
    print('(2)', fibonacci64(50))
    a = digits('00123456789012345678901234567890')
    b = digits('00987654321098765432109876543210')
    print('(3)', show(add_int(a, b)))
    print('(4)', show(fibonacci_digits(140)))
    x = from_text('12345678901234567890123456789012 04')
    y = from_text('98765432109876543210987654321098 09')
    print('(5)', formatted(fp_mul(x, y)))
    root5 = fp_sqrt5()
    phi = fp_div(fp_add(from_text('1'), root5), from_text('2'))
    print('(6)', formatted(phi))
    print('(7)', formatted(fp_div(fp_power(phi, 140), root5)))
    maximum, argmax = from_text('0'), None
    for n in range(1, 141):
        fn = rounded(fibonacci_digits(n))
        gn = fp_div(fp_power(phi, n), root5)
        error = fp_absdiff(fn, gn)
        if fp_compare(error, maximum) > 0:
            maximum, argmax = error, n
    print('(8)', formatted(maximum), 'at x =', argmax)


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser()
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument('--add', nargs=2, metavar=('A', 'B'))
    mode.add_argument('--multiply', nargs=2, metavar=('A', 'B'))
    args = parser.parse_args()
    if args.add:
        if any(len(text) != 32 for text in args.add):
            parser.error('each integer input must contain32digits')
        print(show(add_int(digits(args.add[0]), digits(args.add[1]))))
    elif args.multiply:
        print(formatted(fp_mul(from_text(args.multiply[0]), from_text(args.multiply[1]))))
    else:
        all_results()
```
