function give_money()
    memory.writebyte(0x0D575, 255);
    memory.writebyte(0x0D574, 255);
    memory.writebyte(0x0D573, 15);
end;

function get_name()
	j = memory.readbyterange( 0xD1A3, 7);
	print(tostring(j))
end

--currently working
function check_phone()
	--check for 98 because 0x62=98
	if(memory.readbyte(0xC3B5)== 98) then
		print("PHONE CALL")
		--check ram D175-D177 for address of text string
		--vba.pause()
	end
end

while(true)
do
	check_phone()
	vba.frameadvance()
end
--text displays in E4B9-E4CB ***
-- next line on E4CD-E4DE but is left blank
--next line on E4E1-E4F2 ****
-- 7C = text border, 7F = empty space
--