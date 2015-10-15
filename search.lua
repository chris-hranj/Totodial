i = 0
str = ''
found = false
count = 0

while i < 0xFFFF - 2 do
	count = count + 1
	current = memory.readbyte(i)
	str = str..string.format('%x', current)

	if count == 5 then
		if str == 'a1aeb4a6a7' then
      emu.message(string.format('FOUND! %x', i - 4))
      found = true
      return
    else
    	str = ''
    end
	  count = 0
	end
  i = i + 1
end

if not found then
  emu.message('Not Found')
end
