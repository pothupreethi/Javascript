import re
string = 'Twelve:12 Eighty nine:89 Nine:9.'
pattern = '\b'
# maxsplit = 1
# split only at the first occurrence
result = re.split(pattern, string, 2) 
print(result)
