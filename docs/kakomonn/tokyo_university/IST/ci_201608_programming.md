---
comments: false
title: 東京大学 情報理工学系研究科 創造情報学専攻 2016年8月実施 プログラミング
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2016年8月実施 プログラミング

## **Author**
[tomfluff](https://github.com/tomfluff)

## **Description**
We draw digits from 0 to 9 by the following pictographic characters constructed by `*` and `|` (vertical line).
`*`, `|`, and a whitespace character are rendered with a fixed-width font.

```text
****  *  ****  ****  *  *  ****  *     ****  ****  ****
|  |  |     |     |  |  |  |     |        |  |  |  |  |
*  *  *  ****  ****  ****  ****  ****     *  ****  ****
|  |  |  |        |     |     |  |  |     |  |  |     |
****  *  ****  ****     *  ****  ****     *  ****     *
```

(1) Write a program that draws the pictographic characters representing the input number on the screen and then stores them in the file `out1.txt`.  
The pictographic characters are horizontally aligned.
The space between two pictographic characters is two whitespace characters.  

For example, when the input number is `813`, the program will draw and store the following pictographic characters:

```text
****  *  ****
|  |  |     |
****  *  ****
|  |  |     |
****  *  ****
```


(2) Write a program that reads the pictographic characters stored in the file `out1.txt` generated in (1), recognizes them, and prints the number they represent.

(3) Write a program that draws the pictographic characters for the input number, considering the specified spaces and vertical positions, on the screen and then stores them in the file `out3.txt`.
The input is comma-separated integers.
From the beginning, they are the number drawn (non-negative integer), the vertical position of the first digit (non-negative integer), the space between the first and the second digits (positive integer), the vertical position of the second digit, and so on.  
For example, when the input is

```text
813,0,4,1,3,2
```

the program draws 813:

- `8` at the zeroth line,  
- `1` from the first line,  
- `3` from the second line.  
- The space between `8` and `1` is four whitespaces, and the space between `1` and `3` is three whitespaces.  

The pictographic characters will be drawn as follows:

```text
****     
|  |    *   
****    |   ****
|  |    *      |
****    |   ****
        *      |
            ****
```

(4) Write a program that reads the pictographic characters stored in the file `out3.txt` generated in (3), recognizes them, and prints the number they represent.

(5) Create a copy of the file `out3.txt` generated in (3), and name it `out5.txt`.
Modify the pictographic characters in the file `out5.txt` by hand to have a slightly different shape.
After the modification, the size of each pictographic character is still five by four except for the digit `1`, which becomes either five by one or five by two.  

For example, the contents of `out5.txt` after modification may be 8167 represented as follows:

```text
 **                ****
|  |    *   ***       |
 **     |   |        *
|  |    *   ****    |
 **    |    |  |   *
       *    ****
```

Write a program that reads the pictographic characters stored in the file `out5.txt`, recognize them, and prints the most probable number they represent.

## **Kai**
Please click [here](https://github.com/tomfluff/UTokyo_CI_Entrance_Exam/tree/main/2017-Summer) for the sample data files.

### (1)

```python
from locale import atoi


zero = ['****',
        '|  |',
        '*  *',
        '|  |',
        '****']
one = ['*',
        '|',
        '*',
        '|',
        '*']
two = ['****',
        '   |',
        '****',
        '|   ',
        '****']
three = ['****',
        '   |',
        '****',
        '   |',
        '****']
four = ['*  *',
        '|  |',
        '****',
        '   |',
        '   *']
five = ['****',
        '|   ',
        '****',
        '   |',
        '****']
six = ['*   ',
        '|   ',
        '****',
        '|  |',
        '****']
seven = ['****',
        '   |',
        '   *',
        '   |',
        '   *']
eight = ['****',
        '|  |',
        '****',
        '|  |',
        '****']
nine = ['****',
        '|  |',
        '****',
        '   |',
        '   *']

txt_nums = [zero, one, two, three, four, five, six, seven, eight, nine]

def main():
    n = '012547896583214560'
    with open('2017-Summer/out1.txt','w') as f:
        for j in range(len(txt_nums[0])):
            for s in n:
                i = atoi(s)
                f.write(f"{txt_nums[i][j]}  ")
            f.writelines('\n')


if __name__ == "__main__":
    main()
```

### (2)

```python
import numpy as np
import math

zero = ['****',
        '|  |',
        '*  *',
        '|  |',
        '****']
one = ['*',
        '|',
        '*',
        '|',
        '*']
two = ['****',
        '   |',
        '****',
        '|   ',
        '****']
three = ['****',
        '   |',
        '****',
        '   |',
        '****']
four = ['*  *',
        '|  |',
        '****',
        '   |',
        '   *']
five = ['****',
        '|   ',
        '****',
        '   |',
        '****']
six = ['*   ',
        '|   ',
        '****',
        '|  |',
        '****']
seven = ['****',
        '   |',
        '   *',
        '   |',
        '   *']
eight = ['****',
        '|  |',
        '****',
        '|  |',
        '****']
nine = ['****',
        '|  |',
        '****',
        '   |',
        '   *']

txt_nums = [zero, one, two, three, four, five, six, seven, eight, nine]


def find_correct_index(lines, s_i):
    e_i = 0
    for i in range(len(lines)):
        l = lines[i].strip()
        if l == '':
            continue
        n_e_i = str.find(l,' ',s_i)
        if n_e_i == -1:
            n_e_i = len(l)
        if n_e_i >= e_i:
            e_i = n_e_i
    return e_i

def get_int_from_repr_array(arr):
    if np.array_equal(arr, zero):
        return 0
    if np.array_equal(arr, one):
        return 1
    if np.array_equal(arr, two):
        return 2
    if np.array_equal(arr, three):
        return 3
    if np.array_equal(arr, four):
        return 4
    if np.array_equal(arr, five):
        return 5
    if np.array_equal(arr, six):
        return 6
    if np.array_equal(arr, seven):
        return 7
    if np.array_equal(arr, eight):
        return 8
    if np.array_equal(arr, nine):
        return 9

def get_idx_for_nums(lines):
    idxs = []
    s_i = 0
    should_run = True
    while should_run:
        e_i = find_correct_index(lines, s_i)
        idxs.append((s_i,e_i))

        s_i = e_i + 2
        if s_i >= len(lines[0].strip()):
            should_run = False
    return idxs


def main():
    lines = []
    with open('2017-Summer/out1.txt','r') as f:
        lines = f.readlines()

    idxs = get_idx_for_nums(lines.copy())
    nums = np.full((len(idxs),5), fill_value="****", dtype='object')
    for j in range(len(lines)):
        i = 0
        for s,e in idxs:
            nums[i,j] = lines[j][s:e]
            i += 1

    num = 0
    i = len(idxs)
    for el in nums:
        num += int(math.pow(10,i-1)) * get_int_from_repr_array(el)
        i -= 1
    
    print(num)


if __name__ == "__main__":
    main()
```

### (3)

```python
from locale import atoi

zero = ['****',
        '|  |',
        '*  *',
        '|  |',
        '****']
one = ['*',
        '|',
        '*',
        '|',
        '*']
two = ['****',
        '   |',
        '****',
        '|   ',
        '****']
three = ['****',
        '   |',
        '****',
        '   |',
        '****']
four = ['*  *',
        '|  |',
        '****',
        '   |',
        '   *']
five = ['****',
        '|   ',
        '****',
        '   |',
        '****']
six = ['*   ',
        '|   ',
        '****',
        '|  |',
        '****']
seven = ['****',
        '   |',
        '   *',
        '   |',
        '   *']
eight = ['****',
        '|  |',
        '****',
        '|  |',
        '****']
nine = ['****',
        '|  |',
        '****',
        '   |',
        '   *']

txt_nums = [zero, one, two, three, four, five, six, seven, eight, nine]

def main():
    inp = '690,0,4,2,2,1'
    n = inp[:inp.find(',')]
    prnt_lines = []
    defs = str.split(inp[inp.find(',')+1:],',')
    with open('2017-Summer/out3.txt','w') as f:
        indt = 0
        for i in range(len(n)):
            dg = atoi(n[i])
            tp = atoi(defs[i*2])
            sp = atoi(defs[i*2+1]) if i*2+1 < len(defs) else 0
            for j in range(5):
                while len(prnt_lines)-1 < tp+j:
                    prnt_lines.append('')
                if len(prnt_lines[tp+j]) < indt:
                    prnt_lines[tp+j] += ' ' * (indt-len(prnt_lines[tp+j]))
                prnt_lines[tp+j] += txt_nums[dg][j] + ' ' * sp
            indt = max(len(prnt_lines[tp]),indt)

        for l in prnt_lines:
            f.write(l+'\n')

if __name__ == "__main__":
    main()
```

### (4)

```python
import numpy as np
import math

zero = ['****',
        '|  |',
        '*  *',
        '|  |',
        '****']
one = ['*',
        '|',
        '*',
        '|',
        '*']
two = ['****',
        '   |',
        '****',
        '|   ',
        '****']
three = ['****',
        '   |',
        '****',
        '   |',
        '****']
four = ['*  *',
        '|  |',
        '****',
        '   |',
        '   *']
five = ['****',
        '|   ',
        '****',
        '   |',
        '****']
six = ['*   ',
        '|   ',
        '****',
        '|  |',
        '****']
seven = ['****',
        '   |',
        '   *',
        '   |',
        '   *']
eight = ['****',
        '|  |',
        '****',
        '|  |',
        '****']
nine = ['****',
        '|  |',
        '****',
        '   |',
        '   *']

txt_nums = [zero, one, two, three, four, five, six, seven, eight, nine]


def find_correct_index(lines, s_i):
    e_i = 0
    for i in range(len(lines)):
        l = lines[i]
        if l == '':
            continue
        n_e_i = str.find(l,' ',s_i)
        if n_e_i == -1:
            n_e_i = len(l)
        if n_e_i >= e_i:
            e_i = n_e_i
    return e_i

def get_int_from_repr_array(arr):
    if np.array_equal(arr, zero):
        return 0
    if np.array_equal(arr, one):
        return 1
    if np.array_equal(arr, two):
        return 2
    if np.array_equal(arr, three):
        return 3
    if np.array_equal(arr, four):
        return 4
    if np.array_equal(arr, five):
        return 5
    if np.array_equal(arr, six):
        return 6
    if np.array_equal(arr, seven):
        return 7
    if np.array_equal(arr, eight):
        return 8
    if np.array_equal(arr, nine):
        return 9

def get_idx_for_nums(lines):
    idxs = []
    s_i = 0
    final_si = max([len(l) for l in lines])

    while s_i < final_si:
        e_i = find_correct_index(lines, s_i)
        idxs.append((s_i,e_i))

        s_i = e_i
        n_s_i = s_i
        is_found = False
        while n_s_i < final_si and is_found == False:
            for l in lines:
                if n_s_i >= len(l):
                    continue
                if l[n_s_i] not in [' ','\n']:
                    is_found = True
                    s_i = n_s_i
            n_s_i += 1

    return idxs


def main():
    lines = []
    with open('2017-Summer/out3.txt','r') as f:
        lines = f.readlines()

    idxs = get_idx_for_nums([l[:-1] for l in lines])
    nums = np.full((len(idxs),5), fill_value="****", dtype='object')
    i = 0
    for s,e in idxs:
        j = 0
        for l in lines:
            if len(l) < s or l[s:e].strip() == '':
                continue
            nums[i,j] = l[s:e]
            j += 1
        i += 1

    num = 0
    i = len(idxs)
    for el in nums:
        num += int(math.pow(10,i-1)) * get_int_from_repr_array(el)
        i -= 1
    
    print(num)


if __name__ == "__main__":
    main()
```

### (5)

```python
import numpy as np
import math

zero = ['****',
        '|  |',
        '*  *',
        '|  |',
        '****']
one = ['*',
        '|',
        '*',
        '|',
        '*']
two = ['****',
        '   |',
        '****',
        '|   ',
        '****']
three = ['****',
        '   |',
        '****',
        '   |',
        '****']
four = ['*  *',
        '|  |',
        '****',
        '   |',
        '   *']
five = ['****',
        '|   ',
        '****',
        '   |',
        '****']
six = ['*   ',
        '|   ',
        '****',
        '|  |',
        '****']
seven = ['****',
        '   |',
        '   *',
        '   |',
        '   *']
eight = ['****',
        '|  |',
        '****',
        '|  |',
        '****']
nine = ['****',
        '|  |',
        '****',
        '   |',
        '   *']

txt_nums = [zero, one, two, three, four, five, six, seven, eight, nine]


def find_correct_index(lines, s_i):
    e_i = 0
    for i in range(len(lines)):
        l = lines[i]
        if l == '':
            continue
        n_e_i = str.find(l,' ',s_i)
        if n_e_i == -1:
            n_e_i = len(l)
        if n_e_i >= e_i:
            e_i = n_e_i
    return e_i

def get_most_similar_char(char):
    best_score = 0
    best_match = -1
    if char.shape[1] < 4:
        return 1
    for k in range(len(txt_nums)):
        if k == 1:
            continue
        np_c = np.array([list(l) for l in txt_nums[k]], dtype='str')
        score = 0
        for i in range(np_c.shape[0]):
            for j in range(np_c.shape[1]):
                if char[i,j] == np_c[i,j]:
                    score += 1
        
        if score > best_score:
            best_score = score
            best_match = k
    
    return best_match



def get_idx_for_nums(lines):
    idxs = []
    s_i = 0
    final_si = max([len(l) for l in lines])

    while s_i < final_si:
        e_i = find_correct_index(lines, s_i)
        idxs.append((s_i,e_i))

        s_i = e_i
        n_s_i = s_i
        is_found = False
        while n_s_i < final_si and is_found == False:
            for l in lines:
                if n_s_i >= len(l):
                    continue
                if l[n_s_i] not in [' ','\n']:
                    is_found = True
                    s_i = n_s_i
            n_s_i += 1

    return idxs


def get_vertical_idxs(lines):
    e_i = s_i = 0
    fn_v_i = max([len(l) for l in lines])
    v_idxs = []

    while s_i < fn_v_i:
        is_found = False
        for l in lines:
            if len(l)-1 < e_i:
                continue
            if l[e_i] not in [' ']:
                is_found = True
        if is_found:
            e_i += 1
        else:
            if s_i < e_i:
                v_idxs.append((s_i,e_i))
            s_i = e_i + 1
            e_i = s_i
    
    return v_idxs

def get_horizontal_idxs(lines,v_idxs):
    h_idxs = []
    for s,e in v_idxs:
        s_i = e_i = 0
        for l in lines:
            if l[s:e].strip() != '':
                e_i += 1
            if l[s:e].strip() == '' or e_i == len(lines):
                if s_i < e_i:
                    h_idxs.append((s_i,e_i))
                s_i = e_i + 1
                e_i = s_i
    return h_idxs

def main():
    lines = []
    with open('2017-Summer/out5.txt','r') as f:
        lines = f.readlines()

    v_idxs = get_vertical_idxs([l[:-1] for l in lines])
    h_idxs = get_horizontal_idxs([l[:-1] for l in lines], v_idxs)
    
    max_l = max([len(l) for l in lines])
    nums = np.array([list(l[:-1].ljust(max_l)) for l in lines], dtype='str')
    res = 0

    for i in range(len(v_idxs)):
        v_s,v_e = v_idxs[i]
        h_s,h_e = h_idxs[i]

        char = nums[h_s:h_e,v_s:v_e]
        n = get_most_similar_char(char)
        res += int(math.pow(10,len(v_idxs) - 1 - i)) * n
    
    print(res)


if __name__ == "__main__":
    main()
```