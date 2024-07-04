
# palindrome string

# def is_palindrome(s):
#     return s == s[::-1]


# word = str(input("Enter a word: "))
# print(is_palindrome(word))


# amstron number -`153 = 1^3 + 5^3 + 3^3`

def is_amstrong(n):
    return n == sum([int(i) ** 3 for i in str(n)])

num = int(input("Enter a number: "))
print(is_amstrong(num))